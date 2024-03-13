const availableTimesByDate = {
    '2024-03-12': ['10:00', '11:00', '12:00'],
    '2024-03-13': ['10:00', '11:00', '12:00'],
    '2024-03-14': ['14:00', '15:00', '16:00'],
    '2024-03-15': ['10:00', '11:00', '12:00'],
    '2024-03-16': ['14:00', '15:00', '16:00'],
    '2024-03-17': ['10:00', '11:00', '12:00'],
    '2024-03-18': ['14:00', '15:00', '16:00'],
    '2024-03-19': ['10:00', '11:00', '12:00'],
    '2024-03-20': ['14:00', '15:00', '16:00'],
    '2024-03-21': ['10:00', '11:00', '12:00'],
    '2024-03-22': ['14:00', '15:00', '16:00'],
    '2024-03-23': ['10:00', '11:00', '12:00'],
    '2024-03-24': ['14:00', '15:00', '16:00'],
    '2024-03-25': ['10:00', '11:00', '12:00'],
    '2024-03-26': ['14:00', '15:00', '16:00'],
    '2024-03-27': ['10:00', '11:00', '12:00'],
    '2024-03-28': ['14:00', '15:00', '16:00'],
    '2024-03-29': ['10:00', '11:00', '12:00'],
    '2024-03-30': ['14:00', '15:00', '16:00'],
    '2024-03-31': ['10:00', '11:00', '12:00'],
    '2024-04-01': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}
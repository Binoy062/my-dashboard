const makeData = (length) => {
    return Array.from({ length }, () => ({
      firstName: 'John',
      lastName: 'Doe',
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
    }));
  };
  
  export default makeData;
  
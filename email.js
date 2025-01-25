function vEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  console.log(vEmail("example@gmail.com")); // true
  
  module.exports = vEmail;
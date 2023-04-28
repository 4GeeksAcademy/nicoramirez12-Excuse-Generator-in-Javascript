function generateExcuse() {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
  
    let excuse = who[Math.floor(Math.random() * who.length)] + ' ' +
      action[Math.floor(Math.random() * action.length)] + ' ' +
      what[Math.floor(Math.random() * what.length)] + ' ' +
      when[Math.floor(Math.random() * when.length)] + '.';
  
    return excuse;
  }
  
  window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
  };
  

export default testCard = {
 name: 'testCard',
 type: 'dom',
 render({env, options, payload}) {
   
   let test = document.createElement('div');
   test.className = "test";
   return test;
 }
};
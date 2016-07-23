import Card from './card';


export default class TrelloCard extends Card {
  constructor( ) {
    super();
    this.name = 'trello-card';
    this.previewName = 'trello task';
    this.previewImage = 'https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/c13d1cd96a2cff30f0460a5e1860c5ea/header-logo-blue.svg';
    //this.resizeMode  = this.resizeModeEnum.full_width_only;
  }

  render( { env , options , payload } ) {
     super.render( { env , options , payload } );  
    
    env.postModel.renderNode.element.style.width="480px";
    let holder = document.createElement("div");
    
    holder.innerHTML = `<script>!function(){"use strict";function a(a){var b,c=[];if(!a)return"";for(b in a)a.hasOwnProperty(b)&&(a[b]||a[b]===!1)&&c.push(b+"="+encodeURIComponent(a[b]));return c.length?"?"+c.join("&"):""}var b,c,d,e,f="https://dev.ghost.io/ghost/api/v0.1/";d={api:function(){var d,e=Array.prototype.slice.call(arguments),g=f;return d=e.pop(),d&&"object"!=typeof d&&(e.push(d),d={}),d=d||{},d.client_id=b,d.client_secret=c,e.length&&e.forEach(function(a){g+=a.replace(/^\/|\/$/g,"")+"/"}),g+a(d)}},e=function(a){b=a.clientId?a.clientId:"",c=a.clientSecret?a.clientSecret:"",f=a.url?a.url:f.match(/{\{api-url}}/)?"":f},"undefined"!=typeof window&&(window.ghost=window.ghost||{},window.ghost.url=d,window.ghost.init=e),"undefined"!=typeof module&&(module.exports={url:d,init:e})}();</script><script>
                    ghost.init({
                      clientId: "ghost-frontend",
                      clientSecret: "5785edad1ffc"
                    });
                  </script>`;



    return holder;
  }
}




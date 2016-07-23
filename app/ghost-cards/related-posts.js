import Card from './card';


export default class RelatedPosts extends Card {
  constructor( ) {
    super();
    this.name = 'related-posts';
    this.previewName = 'related posts';
    this.previewImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABQCAYAAADSm7GJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AcXDAgMbQs9UwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAM/ElEQVR42u2dy6/lRhHGvzrn5N4RISKzQyBCMis2LEAiUlYgBGzYICQWwALx98GG/wEWLJhkAI2QIiUS+1mQufO4j+OPxbHdVd3V7fbjvGauo+h6jr9j+9ju6qpfVbfle9//AXG/vLHL6v4S3N/g++XNv8EEyLAORlt3/+l/p+tUOhZ19n9Ex5uiy20bq+NCOu5Jly6bwVtL6n9kflTpxtp1qNs7pKu78DW6pW4yTlonMuEGi/et++VslqoWLBI13u7mO89Z95mo56tW5+03t76E7k1bvMa4qfkime2ZFzU2qDSkS+nuW3D/VBBkWN81PelXIe1lo7QfE0IBzDpNKwIFlEjXti+jgyT7A6T9NKdjtmX3OuzMEtuHXoiwPqjb7VVaZU4HUfs4kG6yifYcLkmaBbPr5qvt5dttD7pBZ4y+O5bXoaxTAsbrRV3BQTymbo6TlfO1ZOAzGalz7bWg+CMGdbX7eJtBR996SdMp7/7ZRrjsGiT70IwMLbXTda02q/PiZd3KWQizSjqmT31Yn6BLWpE69yPoppno7otd/xfbZdMMFa4Quvvov9lud3UY0AkjoxvOy9UNHItw9lejozpuqXs5oG68iT62PZtiemt1UtlfnJNutInOUbMhmlb6PKdhxXkgcYvrY6J9x1mnoBttooXlp0QqP6v2qjLfkcpjljy8scc8N9CBKaCDxznVg7Gsc2qdQ7pJYRJkGb5Xywv7bWLX4+ZV0gkstfB0S7DNU9fVmmiBhL9diNRTrfavtI8DoQiVQ5REkSKto7ruMVHK7S+nA+399XQY0BlqVCBeB9V1BC3oeqonM0w0nfDB5oehYtgoFs7CLqY6ZixSr5MoYJipm0yyjqVjotPXHOebLqz1zqbo7knWcUlWrIPeH6p0cYsdT7JUzco9yTogyRKO1PkEqJZk6c7KPPRSQZ4OpDs/knUMy/8Gkay6OHhkmKRzliXX/uA6fX5tPrsUJp2lbnGSNWTaB57Ig+sy3YZZp7M/qTzuEXVnQrLEAc75+oxZJKv0lXMEH/ckawGSdeq6KV50/4CIGA+uteFRTVbLV3QNUdicEhul65xc997ofQzpOKxznwNzfvCpGSfqcsdaUDfNRGuawiKagq69ovrlhK27tQ+mukIahSaHUAV/k3UCWwMmlg5RF/1FNMwQpYk67lk3qyZrdp86p3prSaI15t/7Ppd96kaRLFUVeSiSRaVjhmTFuhzx6q0PE3oVzpuJlUp1PGndtD64L49lNDSJjhmPkg2qftdNKJR0/SFS+J7VMadjUYcYQ7KyfPXUdMc10fPNzf0yftnUCncjG9IwlMpTDZ5ul5dVdKl1A9nlg1nQtc5Rs93ihx//CBeXD8KBvKd1SvGd+vftzS2ePH6860LIPjTszolNg29++1v48NEjNNvG3b/ICv/+7AlevLzqRxugjTq6RhJGIkBdh7IuPtagbpKJNkkCj3apc9DJiDAkwiYEoNOQQUedYxbg5vYWP/nFz/H+w/eBhiYUoliMqh8yxsG/o9MX7eqr5/jnp5+iaZoA8Blg/nbb4LuPHuGXv/4Vtje3dv/t+nq9xn+//BIvXl7ZDJWzv9T7L+viBzKnmxQmDY1syDGIsC6qiiMDUaJ1s51MhiWb8IHhWrMw5DfW9fdd+YzmArkIU5Xjq33E1aIicrxExDQvOj/CMFuZkBmUTu9GFYYaMnOc7Nccnfcb+pvrRWh0HjREVCMDmsSYuwr8e/Sy2dhEswTwo4/7+iLnHHSHLlIxup/JASR+AIb63hyzjZPpkkk4eMXbZn/5cKV6TNQM3WySVVMoPpdkIUOoiudSo3NqFRLHglHH6oaC8AvjyaSFF/e3D92smixm+mH1u8R9wqz96z9WY4w9nTm2lD1FmdICnB2I+J2bGIGk+Q7jq0jm9w+ZvRm6wm+un2UHGZKlKJEhWfBJFrxZdnIkS0GW0ApjUqKqCgd0Zlv7WySqwQrnmJbyGBNN7b1GcwnpfQwRqiV0OArJshmpPMnK6KLWEQoPxLatVXiCTQVoQQeRPotlIgR6zpj63SK77wLASlQ5uPRGJk+epJJQlXQo65xWLKc+laEcCHKx4ioMVRDzBK/kptZEs51/A7QtKZCsHX2QQZKlaU6ZZO3yzwh0SR9HCJuadkYEtH6DqxM1t4VqiXnyRLDpfqu05l0sXSLU7+Pg/kSdpK9rRyzU6qZ40SFMYkSymJCsxFXNkixWkSxTskuvfFU5rh0NIn3vQVSyISZF3bZ4H0O6LKGqJFldIL6QblILPibJgu9cT/9sH9To1Epqz41kLUp/7geAV5CsMXBlNsnCsrPsSGWcXKvDgXUD12JZkoX9kyxE9VVmfawu2ebRoBwpWlo3kWQVj3UIkhWvGwqVkiz28Wi+o9xum+Va8j6sg1rWqxVQQ7Lc/S2kmxommQw/7A0L3l13w1QgThW6mBOxdjAk2gMs2W63+PiTT3D54NI8uF6eN2WHAzrvAmK6biUrfPb4H3hxdaWCiUxYo4DQkrrpYdJskoUyyXIcNQC4vb3Fj3/2U3yjTfhr5h3/7askIjae03VRW67uWD+MNbr1eoMvPv8cL55f1ZOnpXXnVjYrItg2DZqmZcn0ybDKx4dEBoBG3VxP1yDkhA3DgZ/Uz+l2N72xXdrYeOZtKpvtLUdhklNd7mKSDWqKCCnogp8QAWjqeUDSfXu6GPujugwXJ1I2O0CyUE2ylDXRSfKYZLVNrIlTEf1ELaoMVpyAsTejZV3i12sToPYRnG5LlFIdewxZRZ6EVWSslqDNI1lFixFneqjIr47Q4pmb4+hNkrhO0M0jM20utLKRs96Th0/LOkvsBOJuO5J1HkmyioRLQIiNgU3sGeI9vS2rE3vcbKGGjHvnSrou7jrNeklXNwvjSWeTakgWC/k1Q7KMiZ5QkzXTzxszkyFHkyciSbwvHbvvhWSJc2kL9yIhWQILKxkDprhsJxQ9i6zw/H9ftV1f7rUeVbdrxOdRxyd1utVmg+12m85mm8OkzKDRObo5CX9mSFb3OVXXZUlWxEm8uDXHfwlcXl5CVgJvgj2J4uw+9ysFRqHPNw6dJMMyrL/o6gDg+vpaOYr7b7E1/Ho2yeq9Xz0aWsJVriJZKgcbX9Tr6+t0ikLnoTIv+ajR5V7KwVB8V3x5R0nXx89tYUCsiwhV0B2DZMVT5nnDCCRDspjycU2SYt3OCUuBRvgoNNGiTgppzN56MGHptrfhdB3iaQlrdfTPr1Y3eY6OkruuY0REd048T6dgQzudOKnFOHlR0lH8eTdMqjLzW+J+rqQrrfNIuskkC0MkC4pkqftspndgNBFpRldZKprfFumkUof8+xDSscaFF3BWlrkurTs4yeJkkqXNYeEGkfl6qLm6ObVRteRpad2hSZYkhr6SZB1rLHhtHvk8pucY40VH8TysUy0iUQgidniKJlkSJfw9nVru7u7UdEuFUMdJF3a61WqN1XpVtFLb27t0miKvC/SmM+ou5npzcm9rXWYA+J5I1s31DX73xz/g6++9l5TDjln+/te/4T9Pn2a3f+3dd/Gb3/92uLK9sKxXK/zlT3/Gs2fP3gKSJYozwyNZ4upiksWG+M4HH+D9hw/TG5x7562zPH3yL2slOkeqPdxms8GHH30EWa3S/Q8dp92+3mxwcXk5jmQtTbzmhEkJo4C9VjFYSE1vNzLB5GV8nao9akg05K6iA2qaBmESpUWT7vWfMckAictvethi4ktmKzo0+JGmCaP7x4RTS4dd4000IFGNlWGG3WxyRZJlW3ctyQrt247kC49eR8fSx1jiCbVLRCkmChI3F6f0N9FZjzzBnIxeBpLDoUWdImPsBuSFV+1ONNHRKzkSksUKkmX43SiSZefdgluiq+NUmvOxj3aWZPVRhyDMzhmFa+bwDmAHfLoGNSN9llDV6pjodJHinklW9HhnSdZQSBINZ+kcMreaUdLv0TS8dO4Mj2SJAle6j0m6DZ/Fd0NKTcL/zSNZrCRZrCZZXXkAWXjNMxNa7rxQZ4Bk6cZMGshC1cwZ6fyh4mdIsiCOiUYm2aAxX0yotIku6doW1KjWZ3ojCf2V9eHEvHjL8OQCyepf6mVgTfuZcvh2g8itDkZHm2Apkac96SaTrLLHx6jqnnk7IxV2pv2zkhVev3qNV5cvZ8XB27u74stFSOLVq5ezIMV6vUbTsL4m60Av5hif8C9MZegl/DVdslP4DST82329fn0Nokln9fYKLZKq9N3fdzbvYL1eq3OwUwCSxM3r62SIkDvDjDtKYvfh5cVFiKWdFlWaonAx3V5IlhQggPH8RpCs9rwvLi/yQ1K8sCUzdCWOm2MTffHgsswpc85OkiUt12SVpiicq/Os1LCTlZsiiTClLKKgTxez0ZAs6XW6sJYmYlXzVfUdtcr/mvVOh2Gdu61AioDTfAfDiHc1dMv/AZ7Od1I6RS+7AAAAAElFTkSuQmCC';
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




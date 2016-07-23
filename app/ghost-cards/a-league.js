import Card from './card';


export default class ALeague extends Card {
  constructor( ) {
    super();
    this.name = 'a-league';
    this.previewName = 'a-league ladder';
    this.previewImage = 'http://www.wellingtonphoenix.com/di/library/Wellington_Phoenix/63/49/wellington-phoenix-and-asia-pacific-football-academy-team-up_00068412-leadimage.jpg?t=966402326&h=80&w=120&quality=85';
    
  }

  render( { env , options , payload } ) {
    super.render( { env , options , payload } ); 
    let wrapper = document.createElement("div");
    let holder = document.createElement("div");
    
    holder.innerHTML = '<iframe src="http://widgets.soccerway.com/widget/free/classic/competition/283/8542#d=350x300&amp;f=table,table_colmp,table_colmw,table_colmd,table_colml,table_colgf,table_colga,results,fixtures,scroll&amp;cbackground=FFFFF&amp;ctext=000000&amp;ctitle=000000&amp;cshadow=E8E8E8&amp;cbutton=C0C0C0&amp;cbuttontext=000000&amp;chighlight=FF0000&amp;tbody_family=Tahoma,sans-serif&amp;tbody_size=9&amp;tbody_weight=normal&amp;tbody_style=normal&amp;tbody_decoration=none&amp;tbody_transform=none&amp;ttitle_family=Impact,sans-serif&amp;ttitle_size=13&amp;ttitle_weight=normal&amp;ttitle_style=normal&amp;ttitle_decoration=none&amp;ttitle_transform=none&amp;ttab_family=Tahoma,sans-serif&amp;ttab_size=9&amp;ttab_weight=normal&amp;ttab_style=normal&amp;ttab_decoration=none&amp;ttab_transform=none" width="350" height="300" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe>';


      
    wrapper.appendChild(holder);

    wrapper.style.width="100%";
    wrapper.style.textAlign="center";

    holder.style.display="inline-block";

    return wrapper;
  }
}




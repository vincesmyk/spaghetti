function Videogame(title,year,company,director,genre,price,consoles,visual,rating,review){
    this.title=title;
    this.year=year;
    this.company=company;
    this.director=director;
    this.genre=genre;
    this.price=price;
    this.consoles=consoles;
    this.visual=visual;
    this.rating=rating;
    this.review=review;
}
var favGame=new Videogame("Dark Souls",2011,"FromSoft","Miyazaki","Action RPG", "$60","PC, PS5, XBOX, and Switch","3D","M",5);
//image
document.write("<img src='images/darksouls.jpg' height='200' width='200'>");
document.write("</br>");
document.write("</br>");
//name
document.write("<b><fontsize =20>");
document.write("The game name is " +favGame.title);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//genre
document.write("<b><fontsize =18>");
document.write("The game genre is " +favGame.genre);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//year
document.write("<b><fontsize =16>");
document.write("The game came out in " +favGame.year);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//company
document.write("<b><fontsize =15>");
document.write("The company that made the game is " +favGame.company);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//rating
document.write("<b><fontsize =14>");
document.write("The age rating is " +favGame.rating);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//console
document.write("<b><fontsize =13>");
document.write("The game can be found on " +favGame.consoles);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//price
document.write("<b><fontsize =12>");
document.write("The price of the game is " +favGame.price);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//director
document.write("<b><fontsize =11>");
document.write("The game director is " +favGame.director);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//style
document.write("<b><fontsize =11>");
document.write("The game's visual style is " +favGame.visual);
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");
//review
document.write("<b><fontsize =10>");
document.write("My review of the game is " +favGame.review + " out of 5");
document.write("</b></font size>");
document.write("</br>");
document.write("</br>");


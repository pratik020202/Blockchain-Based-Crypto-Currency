let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");

}
function closePopup(){
    popup.classList.remove("open-popup");

}
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup1").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup1").style.display = "none";
})







	/*var myArray = [
	    {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
	    {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
	    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
	    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
	    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
	    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
	]
	
	buildTable(myArray)



	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].name}</td>
							<td>${data[i].age}</td>
							<td>${data[i].birthdate}</td>
					  </tr>`
			table.innerHTML += row


		}
	}*/

/*const dropdowns = document.querySelectorAll('.dropdown');
const button= document.querySelectorAll('Hero1');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');

            });
            option.classList.add('active');

        });

    });

});*/
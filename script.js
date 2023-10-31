function getFormvalue() {
    //Write your code here
	const Fname = document.querySelector('input[name="fname"]').value;
	const Lname = document.querySelector('input[name="lname"]').value;

	alert(`${Fname} ${Lname}`);
}

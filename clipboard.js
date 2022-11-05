const startMail = localStorage.getItem('start-mail');
const endMail = localStorage.getItem('end-mail');

const copyInfo = (selector, text) => {
	const par = document.getElementById(selector);
	par.innerText = text;
	setTimeout(() => {par.innerText = ''}, 4000)
}

const dummyInDOM = (sourceToCopy) =>  {
	const dummyTextarea = document.createElement("textarea");
	document.body.appendChild(dummyTextarea);
	dummyTextarea.value = sourceToCopy;
	dummyTextarea.select();
	dummyTextarea.setSelectionRange(0,99999);
	document.execCommand("copy");
	document.body.removeChild(dummyTextarea);

}

function copyToClipboard(mailVersion) {
	switch (mailVersion) {
		case 'end-mail':
				const copyEndMail = localStorage.getItem('end-mail');
				dummyInDOM(copyEndMail);	
				copyInfo('p-end', 'Skopiowano do schowka.');

			break;
		case 'start-mail':
				const copyStartMail = localStorage.getItem('start-mail');
				dummyInDOM(copyStartMail);
				copyInfo('p-start', 'Skopiowano do schowka.');
			break;
		default:
			console.error(`Something went wrong, try again later.`);
	}
	
}


const startMail = localStorage.getItem('start-mail');
const endMail = localStorage.getItem('end-mail');

const dummyInDOM = (sourceToCopy) =>  {
	const dummyTextarea = document.createElement("textarea");
	document.body.appendChild(dummyTextarea);
	dummyTextarea.value = sourceToCopy;
	dummyTextarea.select();
	dummyTextarea.setSelectionRange(0,99999);
	/*     document.execCommand("copy"); used to be that but now deprecated */
	navigator.clipboard.writeText(dummyTextarea.value).then(document.body.removeChild(dummyTextarea)).then(alert('Saved e-mail to your clipboard.')).catch(e => {
		console.error(e);
		alert('Something went wrong, try again later.')
	})
	
}

function copyToClipboard(mailVersion) {
	switch (mailVersion) {
		case 'end-mail':
				const copyEndMail = localStorage.getItem('end-mail');
				dummyInDOM(copyEndMail);				
			break;
		case 'start-mail':
				const copyStartMail = localStorage.getItem('start-mail');
				dummyInDOM(copyStartMail);
			break;
		default:
			alert('Something went wrong. Save your e-mail and try again.')
			console.error(`Something went wrong, try again later.`);
	}
	
}


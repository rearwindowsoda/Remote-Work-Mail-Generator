navigator.permissions.query({name: 'clipboard-write', allowWithoutGesture: false}).then(result => {
	console.log(result.state)
})

const startMail = localStorage.getItem('start-mail');
const endMail = localStorage.getItem('end-mail');

const dummyInDOM = (sourceToCopy) =>  {
	const dummyTextarea = document.createElement("textarea");
	document.body.appendChild(dummyTextarea);
	dummyTextarea.value = sourceToCopy;
	dummyTextarea.select();
	dummyTextarea.setSelectionRange(0,99999);
	/*     document.execCommand("copy"); used to be that but now deprecated */
	navigator.clipboard.writeText(dummyTextarea.value).then(document.body.removeChild(dummyTextarea)).then(alert('Copied e-mail to clipboard.')).catch(e => {
		console.error(e);
		alert('Something went wrong, try again later.')
	})
	
}

function copyToClipboard(mailVersion) {
	switch (mailVersion) {
		case 'end-mail':
				const copyEndMail = localStorage.getItem('end-mail');
				setTimeout(() => {dummyInDOM(copyEndMail);}, 300)				
			break;
		case 'start-mail':
				const copyStartMail = localStorage.getItem('start-mail');
				setTimeout(() => {dummyInDOM(copyStartMail);}, 300)		
			break;
		default:
			console.error(`Something went wrong, try again later.`);
	}
	
}


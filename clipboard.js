const startMail = localStorage.getItem('start-mail');
const endMail = localStorage.getItem('end-mail');
function copyToClipboard(mailVersion) {
	switch (mailVersion) {
		case 'end-mail':
				const copyEndMail = localStorage.getItem('end-mail');
				navigator.clipboard.writeText(copyEndMail).then(console.log(copyEndMail)).then(alert("Saved e-mail to your clipboard.")).catch(e => console.log(e));
				
			break;
		case 'start-mail':
				const copyStartMail = localStorage.getItem('start-mail');
				navigator.clipboard.writeText(copyStartMail).then(console.log(copyStartMail)).then(alert("Saved e-mail to your clipboard.")).catch(e => console.log(e));
			break;
		default:
			alert('Something went wrong. Save your e-mail and try again.')
			console.error(`Something went wrong, try again later.`);
	}
	
}


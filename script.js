
	document.querySelector('.inputCostumer').focus()
	document.querySelector('.input').addEventListener('focus', (event) => {
	event.target.value = 44
	})

	const messageState = () => {
	let newMessage = `Oi, ${hour >= 12? 'boa tarde' : 'bom dia' }, aqui é ${salesMan}, da Publisoft, tudo bem? Eu te mandei no email ${email} o contrato de ${documentType} da empresa ${costumer}. Assim que tiver um tempo, dá uma lida e assina, por favor.`
	return newMessage
}

	const updateHref  = () => {
	document.querySelector('#sendMessage').href=`https://wa.me/${phoneNumber}/?text=${message.replaceAll(' ', '%20')}`
}

	const getSalesMan = (element) => {
	salesMan = element.value
	message = messageState()
	updateHref()
}

	const getDocumentType = (element) => {
	documentType = element.value
	message = messageState()
	updateHref()
}

	const getNumber = (element) => {
	phoneNumber = `55${element.value.replace(/[^0-9]/g, '')}`
	updateHref()

	if(element.value.replace(/[^0-9]/g, '').length < 11){
	document.querySelector('#sendMessage').classList.add('disabled')
	document.querySelector('.alert-invalid-phone-number').style.display = 'block'
	element.style.borderColor = 'red'
	} else {
	document.querySelector('#sendMessage').classList.remove('disabled')
	document.querySelector('.alert-invalid-phone-number').style.display = 'none'
	element.style.borderColor = '#191919'
	}
}

	const getCostumer = (element) => {
	costumer = `*${element.value.toUpperCase()}*`
	message = messageState()
	updateHref()
}

	const getEmail = (element) => {
	email = `*${element.value}*`
	message = messageState()
	updateHref()
}



let date = new Date()
let hour = date.getHours()
let salesMan = document.querySelector('#salesMan').value
let documentType = document.querySelector('#documentType').value
let phoneNumber = ''
let costumer = ''
let email = ''
let message = messageState()
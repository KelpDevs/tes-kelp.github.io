const toggleBtn = Document.querySelector('.toggle_btn')
const toggleBtnIcon = Document.querySelector('.toggle_btn i')
const dropDownMenu = Document.querySelector('.dropdown_menu')

	toggleBtn.onclick = function () {
		dropDownMenu.classList.toggle('open')
		const isOpen = dropDownMenu.classList.contains('open')

		toggleBtnIcon.classList = isOpen
			? 'loli'
			: 'Menu'
		}
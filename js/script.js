const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
const isEmpty = (str) => !str.trim().length
let currentStep = 0

// Validate first input on load
validateEntry()

// Next: Change UI relative to current step and account for button permissions
nextButton.addEventListener('click', (event) => {
  event.preventDefault()

  // Hide current tab
  tabPanels[currentStep].classList.add('hidden')
  tabTargets[currentStep].classList.remove('active')

  // Show next tab
  tabPanels[currentStep + 1].classList.remove('hidden')
  tabTargets[currentStep + 1].classList.add('active')
  currentStep += 1
  
  validateEntry()
  updateStatusDisplay()
})

// Previous: Change UI relative to current step and account for button permissions
previousButton.addEventListener('click', (event) => {
  event.preventDefault()

  // Hide current tab
  tabPanels[currentStep].classList.add('hidden')
  tabTargets[currentStep].classList.remove('active')

  // Show previous tab
  tabPanels[currentStep - 1].classList.remove('hidden')
  tabTargets[currentStep - 1].classList.add('active')
  currentStep -= 1

  nextButton.removeAttribute('disabled')
  updateStatusDisplay()
})


function updateStatusDisplay() {
  // If on the last step, hide the next button and show submit
  if (currentStep === tabTargets.length - 1) {
    nextButton.classList.add('hidden')
    previousButton.classList.remove('hidden')
    submitButton.classList.remove('hidden')
    validateEntry()

    // If it's the first step hide the previous button
  } else if (currentStep == 0) {
    nextButton.classList.remove('hidden')
    previousButton.classList.add('hidden')
    submitButton.classList.add('hidden')
    // In all other instances display both buttons
  } else {
    nextButton.classList.remove('hidden')
    previousButton.classList.remove('hidden')
    submitButton.classList.add('hidden')
  }
}

function validateEntry() {
  let input = tabPanels[currentStep].querySelector('.form-input')
  
  // Start but disabling continue button
  
  submitButton.setAttribute('disabled', true)
  
  // Validate on initial function fire
  setButtonPermissions(input)
  
  // Validate on input
  input.addEventListener('input', () => setButtonPermissions(input))
  // Validate if bluring from input
  input.addEventListener('blur', () => setButtonPermissions(input))
}

function setButtonPermissions(input) {
  if (isEmpty(input.value)) {
    nextButton.setAttribute('disabled', true)
    submitButton.setAttribute('disabled', true)
  } else {
    nextButton.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
  }
}





















let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
  let delay = 500;//задержка
  let body=document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
          iconMenu.classList.toggle("_active");
          menuBody.classList.toggle("_active");
  });
};
function menu_close(){
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}



const typeWriter = selector => {
  const el = document.querySelector(selector)
  const text = el.innerHTML

  ;(function _type(i = 0) {
    if (i === text.length) return

    el.innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
    setTimeout(() => _type(i + 1), 100)
  })()
}

typeWriter(".js-type-writer")












var accordion = (function (element) {

  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  
  return function () {
    var _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content 
  
  
    var _actionClick = function (e) {
      if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
        return;
      }
      e.preventDefault();   // Отменям стандартное действие
      // получаем необходимые данные
      var header = e.target,
        item = header.parentElement,
        itemActive = _getItem(_items, 'show');
  
      if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
        item.classList.add('show');
      } else {
        // удаляем класс show у ткущего элемента
        itemActive.classList.remove('show');
        // если следующая вкладка не равна активной
        if (itemActive !== item) {
          // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('show');
        }
      }
    },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };
  
    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _setupListeners();
      }
    }
  
  }
  })();
  
  var accordion1 = accordion();
  accordion1.init('#accordion');
  









 








const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
			let iconMenu = document.querySelector(".icon-menu");
			let menuBody = document.querySelector(".menu__body");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
			
		}
	}
}










const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
  item.addEventListener("mouseover", function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('active') ) {
          tabsBtn.forEach(function(item) {
              item.classList.remove('active');
          });
  
          tabsItems.forEach(function(item) {
              item.classList.remove('active');
          });
  
          currentBtn.classList.add('active');
          currentTab.classList.add('active');
      }
  });
}

document.querySelector('.tabs__nav-btn').click();

















  














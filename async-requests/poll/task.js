const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

xhr.addEventListener('readystatechange', function() {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		pollTitle.innerText = JSON.parse(xhr.responseText).data.title;
		let answers = JSON.parse(xhr.responseText).data.answers;
		for (let i = 0; i < answers.length; i++) {
            let html = `
			<button class="poll__answer">
				${answers[i]}
            </button>
            `;
            pollAnswers.insertAdjacentHTML('beforeEnd', html);
            const buttons = document.querySelectorAll(".poll__answer");
        	for (let i = 0; i < buttons.length; i++) {
            	buttons[i].onclick = function() {
            		alert('Спасибо, ваш вопрос засчитан!');
            		window.location.reload();
            	}
        	}
		}
	}
});
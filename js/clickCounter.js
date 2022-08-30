
function Counter() {
    let [numberDigit, setNumber] = useState(0);
  
    function handleClickPlus() {
      setNumber(numberDigit + 1);
    }

    function handleClickMinus() {
        setNumber(numberDigit - 1);
      }
  
    return (
        <section class="section1__item-number">
            <section class="number">{numberDigit}</section>
            <section text={"+"} onClick={handleClickPlus} />
            <section text={"-"} onClick={handleClickMinus} />
      </section>
    );
}

function Plus(props) {
    const { text, onClick } = props;
  
    return (
      <section
        class="plus"
        onClick={onClick}
      >
        {text}
      </section>
    );
  }

function Minus(props) {
    const { text, onClick } = props;
  
    return (
      <section
        class="minus"
        onClick={onClick}
      >
        {text}
      </section>
    );
  }
  
  


// Вариант адаптированный под js

const clickNumber = document.getElementsByClassName('number');
const plusNumber = document.getElementsByClassName('plus');
const minusNumber = document.getElementsByClassName('minus');


document.querySelector(".plus").onclick = function() {//собитые при клике мыши 
    clickNumber.value = ++clickNumber;//при клике на плюс значение увеличивается
}
document.querySelector(".minus").onclick = function() {//собитые при клике мыши 
    clickNumber.value = --clickNumber;//при клике на минус значение уменьшается
} 



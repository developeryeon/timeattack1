import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { plusNum, minusNum } from './redux/modules/calculator';

function App() {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.calculator.number);

	const [number, setNumber] = useState(0);

	const onNumberChangeHandler = (e) => {
		const { value } = e.target;
		setNumber(+value);
	};

	const onPlusNumberHandler = () => {
		dispatch(plusNum(number));
		setNumber(0);
	};

	const onMinusNumberHandler = () => {
		dispatch(minusNum(number));
		setNumber(0);
	};

	return (
		<div className="App">
			<h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
			<div>
				<input type="number" onChange={onNumberChangeHandler}></input>
				<button onClick={onPlusNumberHandler}>더할게요</button>
				<button onClick={onMinusNumberHandler}>뺄게요</button>
			</div>
			<hr />
			<div>
				<h3>결과:{data}</h3>
				<p>0</p>
			</div>
		</div>
	);
}

export default App;

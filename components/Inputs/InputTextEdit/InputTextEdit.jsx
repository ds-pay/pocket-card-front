import React, { useState, useEffect } from 'react'
import InputText from '../InputText/InputText';
import { ContainerGeneral, Container, DivLinks, InputTextview } from './StylesTextEdit';
import { FiPlusCircle } from 'react-icons/fi'
import { IoMdTrash, IoMdSave } from 'react-icons/io';
import { RiEdit2Fill } from 'react-icons/ri'
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import ButtonSelect from '../../Buttons/ButtonSelect/ButtonSelect';

const InputTextEdit = ({ data }) => {
	const { label, id, value, onChange, onBlur } = data;
	const [labelInput, setLabelInput] = useState(label)
	const [texts, setTexts] = useState(value ? value : []);
	const [textLabel, setTextLabel] = useState("");
	const [indexChange, setIndexChange] = useState("");
	const [changedText, setChangedText] = useState("");


	const addInput = () => {
		if (textLabel) {
			let newText = {
				label: textLabel
			}
			let arr = [...texts, newText];
			setTexts(arr);
			handleUpdateToForm(arr);
			setTextLabel("")
			handleUpdateToForm(arr)
		}
	};

	const handleDelete = (index) => {
		const newArray = [...texts];
		newArray.splice(index, 1);
		setTexts(newArray);
		handleUpdateToForm(newArray);
	};

	const handleActivateEdit = (index) => {
		setIndexChange(index);
		setChangedText(texts[index]);
	};

	const handleUpdateToForm = (linkToSave) => {
		let name = id;
		let value = linkToSave;
		let a = {
			target: {
				name,
				value,
			},
		};
	}

	const handleSaveTextChanged = (index) => {
		let arr = [...texts];
		arr[index] = changedText;
		setTexts(arr);
		handleUpdateToForm(arr);
		setChangedText("");
		setIndexChange("");
	};



	const dataToInput = {
		label: labelInput,
		id,
		value: textLabel,
		type: "text",
		onChange: (e) => setTextLabel(e.target.value),
		onBlur
	};

	return (
		<ContainerGeneral>
			<Container>
				<div className='inputtext'>
					<InputText
						name={"Escribe algo"}
						color={true}
						type={dataToInput.type}
						id={dataToInput.id}
						value={dataToInput.value}
						onChange={dataToInput.onChange}
						onBlur={dataToInput.onBlur}
					/>
				</div>
				<ButtonIcon
					icon={<FiPlusCircle />}
					func={addInput}
					text={"Agregar"}
				/>
			</Container>

			{
				texts &&
				texts.map((link, index) => (
					<DivLinks key={index}>
						<InputTextview
							type={"text"}
							placeholder={link.label}
							disabled={indexChange === index ? false : true}
						/>
						<ButtonIcon
							icon={<IoMdTrash />}
							func={() => handleDelete(index)}
						/>
						{
							indexChange === index
								?
								<ButtonIcon
									icon={<IoMdSave />}
									func={() => handleSaveTextChanged(index)}
								/>
								:
								<ButtonIcon
									icon={<RiEdit2Fill />}
									func={() => handleActivateEdit(index)}
								/>
						}
					</DivLinks>
				))
			}
		</ContainerGeneral>
	)
}

export default InputTextEdit
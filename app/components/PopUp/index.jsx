"use client"; // Этот компонент работает на клиенте
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import "./index.css";

export default function ClientPopup({ id, name, lng }) {
	const translations = {
		en: {
			title: "Leave a request",
			description: "We will contact you shortly.",
			mainh1: "Thank you for your application!",
			content: "We will contact you shortly.",
			phoneForm: "Contact us",
			phoneLabel: "Your phone number:",
			buttonText: "Leave a request",
			orderButton: "Sign up",
		},
		ru: {
			title: "Оставить заявку",
			description: "Мы свяжемся с вами в ближайшее время.",
			mainh1: "Спасибо за заявку!",
			content: "Мы свяжемся с вами в ближайшее время.",
			phoneForm: "Связываться с нами",
			phoneLabel: "Ваш номер телефона:",
			buttonText: "Оставить заявку",
			orderButton: "Записаться",
		},
		uk: {
			title: "Залишити заявку",
			description: "Ми зв'яжемося з вами найближчим часом.",
			mainh1: "Дякую за заявку!",
			content: "Ми зв'яжемося з вами найближчим часом.",
			phoneForm: "Зв'язатися з нами",
			phoneLabel: "Ваш номер телефону:",
			buttonText: "Залишити заявку",
			orderButton: "Записатися",
		},
	};

	const pathname = usePathname();
	const locale = pathname.replace("/", "");
	const t = translations[locale];

	/*                */
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [tel, setTel] = useState("");
	const [status, setStatus] = useState("");
	const [formData, setFormData] = useState({
		name: "",
	});

	useEffect(() => {
		if (isPopupVisible) {
			document.body.classList.add("popup-open");
		} else {
			document.body.classList.remove("popup-open");
		}
		// Clean-up function to prevent memory leaks
		return () => {
			document.body.classList.remove("popup-open");
		};
	}, [isPopupVisible]);

	const handleTogglePopup = () => {
		setIsPopupVisible((prev) => !prev);
	};

	const handleInput = (e) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: fieldValue,
		}));
	};

	const submitForm = (e) => {
		e.preventDefault();

		const formURL = e.target.action;
		const data = new FormData();

		Object.entries(formData).forEach(([key, value]) => {
			data.append(key, value);
		});

		fetch(formURL, {
			method: "POST",
			body: data,
			headers: {
				accept: "application/json",
			},
		}).then(() => {
			setFormData({
				name: "",
			});
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!tel.trim()) {
			setStatus("Будь ласка, введіть номер телефону");
			return;
		}

		try {
			const response = await fetch("/api/telegram/send-message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tel,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setStatus("Повідомлення надіслано!");
				setTel("");
			} else {
				throw new Error(result.error || "Помилка відправки!");
			}
		} catch (error) {
			setStatus(`Помилка: ${error.message}`);
		}
	};

	return (
		<div className='btn-red popup-block'>
			<div className='orderbutton' onClick={handleTogglePopup}>
				<span>{t.orderButton}</span>
			</div>
			{isPopupVisible && (
				<>
					<div
						className={`popup-content visible`}
						aria-hidden={!isPopupVisible}
					>
						<button
							onClick={handleTogglePopup}
							className='close-button d-flex justify-content-end'
						>
							Х
						</button>
						<p className='h4 like-header mb-4'>{t.title}</p>

						<form
							method='POST'
							onSubmit={handleSubmit}
							className='d-flex justify-content-center flex-column'
						>
							<div className='d-flex flex-column'>
								<label className='mb-1'>
									<i className='bi bi-phone'></i> {t.phoneLabel}
								</label>
								<input
									type='tel'
									name='tel'
									id='tel'
									required
									placeholder='+38 096 033 66 36'
									value={tel}
									onChange={(e) => setTel(e.target.value)}
								/>
							</div>

							<button type='submit' className='justify-content-center'>
								{t.buttonText} <i className='bi bi-send-fill'></i>
							</button>
						</form>
						<div className='col-12 text-center'>
							<br />
							{status && <p>{status}</p>}
						</div>
					</div>
					<div className='popup-overlay' onClick={handleTogglePopup}></div>
				</>
			)}
		</div>
	);
}

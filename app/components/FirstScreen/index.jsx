import "./index.css";
import { useTranslation } from "../../i18n/"; // Імпортуємо функцію перекладу
import Image from "next/image";
import logo from "./logo.webp";
import ClientPopup from "../PopUp/index";
export default async function FirstScreen({ lng }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	// Відображаємо компонент після завантаження перекладів
	return (
		<section className='first-screen d-flex'>
			<Image
				height={300}
				width={300}
				src={logo}
				alt={t("HomePage.altLogo")} // Використовуємо переклад
				className='header-logo'
			/>
			<h1>{t("HomePage.mainh1")}</h1>
			<ClientPopup id='0' name={t("HomePage.mainButton")} />
		</section>
	);
}

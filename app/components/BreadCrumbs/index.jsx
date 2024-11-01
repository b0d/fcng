"use client";
import "./index.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../../i18n/client";

export default function BreadCrumbs({ getcontent, sendt, lng }) {
	const pathname = usePathname();
	const { t } = useTranslation(lng);

	// Розбиваємо шлях на частини
	const pathParts = pathname.split("/").filter(Boolean);

	// Видаляємо першу частину шляху, якщо це мова
	const supportedLanguages = ["ru", "en", "uk"];
	if (supportedLanguages.includes(pathParts[0])) {
		pathParts.shift(); // Видаляємо мову з шляху
	}

	// Назва головної сторінки
	const homeLabel = t("HomePage.mainh1");

	// Генеруємо масив хлібних крихт
	const breadcrumbs = [
		{ href: lng === "ru" ? "/" : `/${lng}`, label: homeLabel }, // Ссылка на главную сторінку з урахуванням мови, без "ru" для російської
		...pathParts.map((part, index) => {
			const href =
				lng === "ru"
					? "/" + pathParts.slice(0, index + 1).join("/")
					: `/${lng}/` + pathParts.slice(0, index + 1).join("/");

			// Перевіряємо, чи частина шляху відповідає ключу в перекладі
			let label;
			if (part === "blog") {
				label = t("Header.menu6"); // Використовуємо переклад для блогу
			} else if (part === "girls") {
				label = t("Header.menu7");
			} else if (index === pathParts.length - 1) {
				label = sendt; // Останній елемент замінюємо на значення sendt
			} else {
				label = typeof getcontent === "function" ? getcontent(part) : part;
			}

			return { href, label };
		}),
	];

	return (
		<nav aria-label='breadcrumbs'>
			<ol className='d-flex flex-row'>
				{breadcrumbs.map((crumb, index) => (
					<li key={index} className='breadcrumb-item'>
						<Link href={crumb.href}>{crumb.label}</Link>

						{index < breadcrumbs.length - 1}
					</li>
				))}
			</ol>
		</nav>
	);
}

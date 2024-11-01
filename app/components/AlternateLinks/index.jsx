"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const supportedLocales = ["en", "ru", "uk"];

const AlternateLinks = () => {
	const pathname = usePathname(); // Отримуємо поточний шлях
	const locale = useLocale(); // Отримуємо поточну локаль

	// Прибираємо поточну локаль зі шляху, якщо вона є
	const cleanPathname = pathname.startsWith(`/${locale}`)
		? pathname.replace(`/${locale}`, "")
		: pathname;

	return (
		<>
			{supportedLocales.map((loc) => (
				<link
					key={loc}
					rel='alternate'
					hrefLang={loc}
					href={`/${loc}${cleanPathname}`}
				/>
			))}

			{/* hreflang="x-default" завжди вказує на англійську версію */}
			<link rel='alternate' hrefLang='x-default' href={`/en${cleanPathname}`} />
		</>
	);
};

export default AlternateLinks;

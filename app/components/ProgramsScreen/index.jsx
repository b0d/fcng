import "./index.css";
import Image from "next/image";

import ClientPopup from "../../components/PopUp/index";
import sanitizeHtml from "sanitize-html";
import programsData from "../../i18n/locales/ru/translation";
import { useTranslation } from "../../i18n";

export default async function ProgramsScreen({ lng }) {
	const howMuchProg = Object.keys(programsData.Programs);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);

	return (
		<article className='container programs-screen d-flex flex-column'>
			<div className='col-12 d-flex flex-row flex-wrap'>
				{howMuchProg.slice(0).map((i) => (
					<div
						className='program col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 '
						key={i}
					>
						<figure className='d-flex flex-column justify-content-center vertical-align-center'>
							<Image
								height={300}
								width={300}
								src={t(`Programs.${i}.img`)}
								alt={t(`Programs.${i}.alt`)}
								className='program-picture'
							/>
							<figcaption className='d-flex flex-column justify-content-center'>
								<span className='program-title'>
									{t(`Programs.${i}.title`)}
								</span>
								<p className='price-p'>{t(`Programs.${i}.price`)}</p>
								<p className='h6'>{t(`Programs.${i}.description`)}</p>

								<ClientPopup
									id={t(`Programs.${i}.id`)}
									name={t(`Programs.${i}.title`)}
								/>
							</figcaption>
						</figure>
					</div>
				))}
			</div>
			<div className='programs-block d-flex flex-row justify-content-between flex-wrap'>
				<div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center'>
					<p>
						{t("ProgramsDop.10.title")} {t("ProgramsDop.10.description")}
					</p>
					<div
						dangerouslySetInnerHTML={{
							__html: sanitizeHtml(
								t("ProgramsDop.10.content", {
									p: (chunks) => `<p>${chunks}</p>`,
									b: (chunks) => `<b>${chunks}</b>`,
									ul: (chunks) => `<ul>${chunks}</ul>`,
									li: (chunks) => `<li>${chunks}</li>`,
									i: (chunks) => `<i>${chunks}</i>`,
								})
							),
						}}
					></div>
				</div>
			</div>
		</article>
	);
}

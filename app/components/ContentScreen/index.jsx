import "./index.css";
import sanitizeHtml from "sanitize-html";
import { useTranslation } from "../../i18n/";

export default async function ContentScreen({ textNeeded, lng }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);
	let textBlock, textContent;
	const textBlocks = {
		1: {
			header: "HomePage.textBlock1Header",
			content: "HomePage.textBlock1Content",
		},
		2: {
			header: "HomePage.textBlock2Header",
			content: "HomePage.textBlock2Content",
		},
		3: {
			header: "HomePage.textBlock3Header",
			content: "HomePage.textBlock3Content",
		},
		4: {
			header: "HomePage.textBlock4Header",
			content: "HomePage.textBlock4Content",
		},
		5: {
			header: "HomePage.textBlock5Header",
			content: "HomePage.textBlock5Content",
		},
		6: {
			header: "HomePage.textBlock6Header",
			content: "HomePage.textBlock6Content",
		},
		7: {
			header: "HomePage.textBlock7Header",
			content: "HomePage.textBlock7Content",
		},
		8: {
			header: "HomePage.textBlock8Header",
			content: "HomePage.textBlock8Content",
		},
		9: {
			header: "HomePage.textBlock9Header",
			content: "HomePage.textBlock9Content",
		},
		10: {
			header: "HomePage.textBlock10Header",
			content: "HomePage.textBlock10Content",
		},
	};

	if (textNeeded && textBlocks[textNeeded]) {
		const { header, content } = textBlocks[textNeeded];
		textBlock = sanitizeHtml(
			t(header, {
				p: (chunks) => `<p>${chunks}</p>`,
				b: (chunks) => `<b>${chunks}</b>`,
				h2: (chunks) => `<h2>${chunks}</h2>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				li: (chunks) => `<li>${chunks}</li>`,
				div: (chunks) => `<div>${chunks}</div>`,
				h1: (chunks) => `<h1>${chunks}</h1>`,
				h3: (chunks) => `<h3>${chunks}</h3>`,
			})
		);
		textContent = sanitizeHtml(
			t(content, {
				p: (chunks) => `<p>${chunks}</p>`,
				h1: (chunks) => `<h1>${chunks}</h1>`,
				b: (chunks) => `<b>${chunks}</b>`,
				h2: (chunks) => `<h2>${chunks}</h2>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				li: (chunks) => `<li>${chunks}</li>`,
				div: (chunks) => `<div>${chunks}</div>`,
			})
		);
	}

	return (
		<div className='content-screen container d-flex flex-column collapse'>
			<div className='h2-title'>
				<div
					dangerouslySetInnerHTML={{
						__html: sanitizeHtml(textBlock),
					}}
				></div>
			</div>

			<div
				dangerouslySetInnerHTML={{
					__html: sanitizeHtml(textContent),
				}}
				className='hide-content'
			></div>
		</div>
	);
}

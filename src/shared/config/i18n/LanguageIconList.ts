import type {supportedLngs} from "@/shared/config/i18n/i18n.ts";
import type {FunctionComponent, SVGProps} from "react";
import EnglishIcon from "@/shared/assets/icons/English.svg?react"
import BanglaIcon from "@/shared/assets/icons/Bangla.svg?react"

export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
    SupportedLngsType,
    FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
    en: EnglishIcon,
    bn: BanglaIcon,
};
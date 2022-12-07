import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type MUSICMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PORTFOLIOLAPTOPMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PORTFOLIOPHONEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type INTROesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NAVBARMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SERVICESMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EXPERIENCEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WORKSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PORTFOLIOMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TESTIMONIALSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CONTACTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FOOTERMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMUSIC = {
  readonly id: string;
  readonly source?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMUSIC = {
  readonly id: string;
  readonly source?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MUSIC = LazyLoading extends LazyLoadingDisabled ? EagerMUSIC : LazyMUSIC

export declare const MUSIC: (new (init: ModelInit<MUSIC, MUSICMetaData>) => MUSIC) & {
  copyOf(source: MUSIC, mutator: (draft: MutableModel<MUSIC, MUSICMetaData>) => MutableModel<MUSIC, MUSICMetaData> | void): MUSIC;
}

type EagerPORTFOLIOLAPTOP = {
  readonly id: string;
  readonly imgLaptop: string;
  readonly imgContent: string;
  readonly projectTitle: string;
  readonly projectDescription: string;
  readonly btnText: string;
  readonly btnLink: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPORTFOLIOLAPTOP = {
  readonly id: string;
  readonly imgLaptop: string;
  readonly imgContent: string;
  readonly projectTitle: string;
  readonly projectDescription: string;
  readonly btnText: string;
  readonly btnLink: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PORTFOLIOLAPTOP = LazyLoading extends LazyLoadingDisabled ? EagerPORTFOLIOLAPTOP : LazyPORTFOLIOLAPTOP

export declare const PORTFOLIOLAPTOP: (new (init: ModelInit<PORTFOLIOLAPTOP, PORTFOLIOLAPTOPMetaData>) => PORTFOLIOLAPTOP) & {
  copyOf(source: PORTFOLIOLAPTOP, mutator: (draft: MutableModel<PORTFOLIOLAPTOP, PORTFOLIOLAPTOPMetaData>) => MutableModel<PORTFOLIOLAPTOP, PORTFOLIOLAPTOPMetaData> | void): PORTFOLIOLAPTOP;
}

type EagerPORTFOLIOPHONE = {
  readonly id: string;
  readonly imgPhone: string;
  readonly imgContent: string;
  readonly projectTitle: string;
  readonly projectDescription: string;
  readonly btnText: string;
  readonly btnLink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPORTFOLIOPHONE = {
  readonly id: string;
  readonly imgPhone: string;
  readonly imgContent: string;
  readonly projectTitle: string;
  readonly projectDescription: string;
  readonly btnText: string;
  readonly btnLink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PORTFOLIOPHONE = LazyLoading extends LazyLoadingDisabled ? EagerPORTFOLIOPHONE : LazyPORTFOLIOPHONE

export declare const PORTFOLIOPHONE: (new (init: ModelInit<PORTFOLIOPHONE, PORTFOLIOPHONEMetaData>) => PORTFOLIOPHONE) & {
  copyOf(source: PORTFOLIOPHONE, mutator: (draft: MutableModel<PORTFOLIOPHONE, PORTFOLIOPHONEMetaData>) => MutableModel<PORTFOLIOPHONE, PORTFOLIOPHONEMetaData> | void): PORTFOLIOPHONE;
}

type EagerINTROes = {
  readonly id: string;
  readonly firstText: string;
  readonly name: string;
  readonly description: string;
  readonly emphasesedText: string;
  readonly descriptionCont: string;
  readonly githubLink: string;
  readonly linkedinLink: string;
  readonly instagramLink: string;
  readonly githubImage: string;
  readonly linkedinImage: string;
  readonly instagramImage: string;
  readonly glasses: string;
  readonly floatingrightImage: string;
  readonly floatingrightText: string;
  readonly floatingleftImage: string;
  readonly floatingleftText: string;
  readonly characterImage: string;
  readonly blueBkImage: string;
  readonly orangeBkImage: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINTROes = {
  readonly id: string;
  readonly firstText: string;
  readonly name: string;
  readonly description: string;
  readonly emphasesedText: string;
  readonly descriptionCont: string;
  readonly githubLink: string;
  readonly linkedinLink: string;
  readonly instagramLink: string;
  readonly githubImage: string;
  readonly linkedinImage: string;
  readonly instagramImage: string;
  readonly glasses: string;
  readonly floatingrightImage: string;
  readonly floatingrightText: string;
  readonly floatingleftImage: string;
  readonly floatingleftText: string;
  readonly characterImage: string;
  readonly blueBkImage: string;
  readonly orangeBkImage: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INTROes = LazyLoading extends LazyLoadingDisabled ? EagerINTROes : LazyINTROes

export declare const INTROes: (new (init: ModelInit<INTROes, INTROesMetaData>) => INTROes) & {
  copyOf(source: INTROes, mutator: (draft: MutableModel<INTROes, INTROesMetaData>) => MutableModel<INTROes, INTROesMetaData> | void): INTROes;
}

type EagerNAVBAR = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNAVBAR = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NAVBAR = LazyLoading extends LazyLoadingDisabled ? EagerNAVBAR : LazyNAVBAR

export declare const NAVBAR: (new (init: ModelInit<NAVBAR, NAVBARMetaData>) => NAVBAR) & {
  copyOf(source: NAVBAR, mutator: (draft: MutableModel<NAVBAR, NAVBARMetaData>) => MutableModel<NAVBAR, NAVBARMetaData> | void): NAVBAR;
}

type EagerSERVICES = {
  readonly id: string;
  readonly awesome: string;
  readonly services: string;
  readonly text: string;
  readonly cardDesign: string;
  readonly cardDeveloper: string;
  readonly cardUi: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySERVICES = {
  readonly id: string;
  readonly awesome: string;
  readonly services: string;
  readonly text: string;
  readonly cardDesign: string;
  readonly cardDeveloper: string;
  readonly cardUi: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SERVICES = LazyLoading extends LazyLoadingDisabled ? EagerSERVICES : LazySERVICES

export declare const SERVICES: (new (init: ModelInit<SERVICES, SERVICESMetaData>) => SERVICES) & {
  copyOf(source: SERVICES, mutator: (draft: MutableModel<SERVICES, SERVICESMetaData>) => MutableModel<SERVICES, SERVICESMetaData> | void): SERVICES;
}

type EagerEXPERIENCE = {
  readonly id: string;
  readonly yearsExperience: string;
  readonly completedProjects: string;
  readonly companiesWord: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEXPERIENCE = {
  readonly id: string;
  readonly yearsExperience: string;
  readonly completedProjects: string;
  readonly companiesWord: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EXPERIENCE = LazyLoading extends LazyLoadingDisabled ? EagerEXPERIENCE : LazyEXPERIENCE

export declare const EXPERIENCE: (new (init: ModelInit<EXPERIENCE, EXPERIENCEMetaData>) => EXPERIENCE) & {
  copyOf(source: EXPERIENCE, mutator: (draft: MutableModel<EXPERIENCE, EXPERIENCEMetaData>) => MutableModel<EXPERIENCE, EXPERIENCEMetaData> | void): EXPERIENCE;
}

type EagerWORKS = {
  readonly id: string;
  readonly works: string;
  readonly brands: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWORKS = {
  readonly id: string;
  readonly works: string;
  readonly brands: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WORKS = LazyLoading extends LazyLoadingDisabled ? EagerWORKS : LazyWORKS

export declare const WORKS: (new (init: ModelInit<WORKS, WORKSMetaData>) => WORKS) & {
  copyOf(source: WORKS, mutator: (draft: MutableModel<WORKS, WORKSMetaData>) => MutableModel<WORKS, WORKSMetaData> | void): WORKS;
}

type EagerPORTFOLIO = {
  readonly id: string;
  readonly recent: string;
  readonly portfolio: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPORTFOLIO = {
  readonly id: string;
  readonly recent: string;
  readonly portfolio: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PORTFOLIO = LazyLoading extends LazyLoadingDisabled ? EagerPORTFOLIO : LazyPORTFOLIO

export declare const PORTFOLIO: (new (init: ModelInit<PORTFOLIO, PORTFOLIOMetaData>) => PORTFOLIO) & {
  copyOf(source: PORTFOLIO, mutator: (draft: MutableModel<PORTFOLIO, PORTFOLIOMetaData>) => MutableModel<PORTFOLIO, PORTFOLIOMetaData> | void): PORTFOLIO;
}

type EagerTESTIMONIALS = {
  readonly id: string;
  readonly img: string;
  readonly review: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTESTIMONIALS = {
  readonly id: string;
  readonly img: string;
  readonly review: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TESTIMONIALS = LazyLoading extends LazyLoadingDisabled ? EagerTESTIMONIALS : LazyTESTIMONIALS

export declare const TESTIMONIALS: (new (init: ModelInit<TESTIMONIALS, TESTIMONIALSMetaData>) => TESTIMONIALS) & {
  copyOf(source: TESTIMONIALS, mutator: (draft: MutableModel<TESTIMONIALS, TESTIMONIALSMetaData>) => MutableModel<TESTIMONIALS, TESTIMONIALSMetaData> | void): TESTIMONIALS;
}

type EagerCONTACT = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCONTACT = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CONTACT = LazyLoading extends LazyLoadingDisabled ? EagerCONTACT : LazyCONTACT

export declare const CONTACT: (new (init: ModelInit<CONTACT, CONTACTMetaData>) => CONTACT) & {
  copyOf(source: CONTACT, mutator: (draft: MutableModel<CONTACT, CONTACTMetaData>) => MutableModel<CONTACT, CONTACTMetaData> | void): CONTACT;
}

type EagerFOOTER = {
  readonly id: string;
  readonly instagramLink: string;
  readonly linkedinLink: string;
  readonly githubLink: string;
  readonly allRights: string;
  readonly email: string;
  readonly developer: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFOOTER = {
  readonly id: string;
  readonly instagramLink: string;
  readonly linkedinLink: string;
  readonly githubLink: string;
  readonly allRights: string;
  readonly email: string;
  readonly developer: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FOOTER = LazyLoading extends LazyLoadingDisabled ? EagerFOOTER : LazyFOOTER

export declare const FOOTER: (new (init: ModelInit<FOOTER, FOOTERMetaData>) => FOOTER) & {
  copyOf(source: FOOTER, mutator: (draft: MutableModel<FOOTER, FOOTERMetaData>) => MutableModel<FOOTER, FOOTERMetaData> | void): FOOTER;
}
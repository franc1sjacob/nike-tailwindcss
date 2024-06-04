export interface NavLinkType {
  href: string;
  label: string;
}

export interface ShoeType {
  thumbnail: string;
  bigShoe: string;
}

export interface StatisticType {
  value: string;
  label: string;
}

export interface ProductType {
  imgURL: string;
  name: string;
  price: string;
}

export interface ServiceType {
  imgURL: string;
  label: string;
  subtext: string;
}

export interface ReviewType {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

export interface LinkType {
  name: string;
  link: string;
}

export interface FooterLinkType {
  title: string;
  links: LinkType[];
}

export interface SocialMediaType {
  src: string;
  alt: string;
}

export interface ButtonProps {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

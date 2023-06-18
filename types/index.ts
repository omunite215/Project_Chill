export interface WorkCardProps { 
    image_source: string;
    title: string;
    category: string;
}

export interface WorkCardDetailProps{
    image_source: string;
    title: string;
    description: string;
    technologies: string;
    link: string;
}

export interface ClientContent{
    image_source: string;
    description: string;
    name: string;
    classification: string;
}

export interface AddressContent{
    name: string;
    address: string;
    phone: string;
    link: string;
}

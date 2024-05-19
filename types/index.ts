declare interface ButtonHandlerProps {
    children: React.ReactNode
    mode?: "modal" | "redirect",
    asChild?: boolean,
    link?: String
}

declare interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: String,
    backButtonLabel: String,
    backButtonHref: String,
    showSocial?: boolean

}

declare interface HeaderProps {
    label: String
}

declare interface BackbuttonProps {
    href:  any
    label: String
}

declare interface FormErrorProps {
    message?: String
}

declare type LoginUserProps = {
    email: String;
    password: String;
};

declare type RegisterUserProps = {
    name: String
    email: String;
    password: String;
    password_confirmation: String;
};
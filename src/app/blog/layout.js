import SectionIndicator from "../components/blog/SectionIndicator";

export default function BlogLayout({ children }) {
    return (
        <>
            <SectionIndicator />
            {children}
        </>
    );
}

export const metadata = {
    title: "Our Products | SGS Technical Solutions",
    description: "SGS Technical Solutions",
};


export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
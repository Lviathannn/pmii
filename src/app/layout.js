import Navbar from "@/section/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/section/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "Media Pergerakan",
    description:
        " Pergerakan Mahasiswa Islam Indonesia (atau yang disingkat sebagai PMII),merupakan organisasi kemahasiswaan yang berdiri pada tanggal 17 April 1960 di Surabaya. Pendirian PMII dimotori oleh kalangan muda Nahdlatul Ulama (NU) yang merasa perlu adanya organisasi kemahasiswaan yang berbasis Islam dan berhaluan Islam moderat. ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} overflow-x-hidden`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

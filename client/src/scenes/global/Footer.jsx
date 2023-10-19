import { Box, Typography, useTheme } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {

    const { palette: { neutral } } = useTheme();

    return (

        <Box mt = "70px" p = "40px 0"  backgroundColor = { neutral.light } >
        
            <Box
                width           = "80%"
                margin          = "auto"
                display         = "flex"
                justifyContent  = "space-between"
                flexWrap        = "warp"
                rowGap          = "30px"
                columnGap       = "clamp(20px, 30px, 40px)"
            >
                <Box width = "clamp(20%, 30%, 40%)">
                    <Typography  variant="h4"   fontWeight="bold"  mb = "30px"  color = { shades.secondary[500] }>NXE - COMMERS</Typography>
                    <div>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya</div>
                </Box>

                <Box>
                    <Typography  variant="h4"  fontWeight="bold"  mb="30px">About Us</Typography>
                    <Typography  mb="30px">Careers</Typography>
                    <Typography  mb="30px">Our Store</Typography>
                    <Typography  mb="30px">Terms & Conditions</Typography>
                    <Typography  mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography  variant="h4"  fontWeight="bold"  mb="30px">Customer Care</Typography>
                    <Typography  mb="30px">Careers</Typography>
                    <Typography  mb="30px">Our Store</Typography>
                    <Typography  mb="30px">Terms & Conditions</Typography>
                    <Typography  mb="30px">Privacy Policy</Typography>
                </Box>

                <Box width = "clamp(20%, 25%, 30%)">
                    <Typography  variant="h4"  fontWeight="bold"  mb="30px">Contact Us</Typography>
                    <Typography  mb="30px">11/111 Siam square, bangkok</Typography>
                    <Typography  mb="30px">nx@gmail.com</Typography>
                    <Typography  mb="30px">tel 11-11-23344</Typography>
                </Box>
                


                        
            </Box>
            

    </Box>
    )
};

export default Footer;

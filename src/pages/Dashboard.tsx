import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  UserCheck,
  Play,
  ExternalLink,
  Globe,
  Shuffle
} from "lucide-react";
import TypingAnimation from "@/components/common/TypingAnimation";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [contentReady, setContentReady] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleTypingComplete = () => {
    setContentReady(true);
  };

  // Mock blog data for different languages
  const blogData = {
    english: [
      {
        title: "Advanced Crop Rotation Techniques",
        summary: "Learn modern crop rotation methods to improve soil health and maximize yield.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop",
        link: "https://farmonaut.com/blogs/farmer-crop-rotation-techniques-for-sustainable-agriculture"
      },
      {
        title: "Integrated Pest Management Guide",
        summary: "Sustainable approaches to pest control without harmful chemicals.",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop",
        link: "https://eos.com/blog/integrated-pest-management/"
      },
      {
        title: "Government Farming Schemes 2025",
        summary: "Latest government initiatives and financial support for farmers.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop",
        link: "https://kshema.co/government-schemes-and-subsidies-for-farmers-in-india/"
      },
      {
        title: "Precision Agriculture Technology",
        summary: "Using AI and IoT for smart farming and increased productivity.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop",
        link: "https://eos.com/blog/precision-agriculture/"
      },
      {
        title: "Market Price Analysis",
        summary: "Understanding crop price trends and market dynamics.",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=200&fit=crop",
        link: "https://farmonaut.com/blogs/price-forecasting-of-agricultural-commodities-shocking-new-tech"
      },
      {
        title: "Organic Farming Certification",
        summary: "Steps to obtain organic certification and premium pricing.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        link: "https://farmonaut.com/blogs/sustainable-organic-farming-blog-agriculture-2025"
      }
    ],
    telugu: [
      {
        title: "వ్యవసాయ నూతన పద్ధతులు",
        summary: "ఆధునిక వ్యవసాయ పద్ధతులు మరియు మట్టి ఆరోగ్యం మెరుగుపరచడం.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop",
        link: "https://farmonaut-com.translate.goog/precision-farming/new-farming-techniques-7-innovations-for-2025?_x_tr_sl=en&_x_tr_tl=te&_x_tr_hl=te&_x_tr_pto=tc"
      },
      {
        title: "పంట రక్షణ సహజ పద్ధతులు",
        summary: "రసాయనాలు లేకుండా పంటలను కీటకాల నుండి రక్షించడం.",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop",
        link: "https://farmonaut.com/blogs/crop-protection-7-secret-eco-hacks-to-stop-pests"
      },
      {
        title: "ప్రభుత్వ రైతు పథకాలు",
        summary: "రైతులకు ప్రభుత్వ సహాయం మరియు వర్ధకం పథకాలు.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop",
        link: "https://telugu.news18.com/photogallery/andhra-pradesh/ap-government-announces-fresh-chance-for-farmers-to-apply-for-annadata-sukhibhava-scheme-benefits-nk-ws-l-2878137.html"
      },
      {
        title: "ఆధునిక వ్యవసాయ సాంకేతికత",
        summary: "AI మరియు IoT ఉపయోగించి స్మార్ట్ వ్యవసాయం.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop",
        link: "https://myknowledgebase.in/modern-technology-boosts-agriculture-farming/"
      },
      {
        title: "మార్కెట్ ధరల విశ్లేషణ",
        summary: "పంట ధరలు మరియు మార్కెట్ ట్రెండ్స్ అర్థం చేసుకోవడం.",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=200&fit=crop",
        link: "https://puregreensaz-com.translate.goog/blog/what-is-commercial-agriculture/?_x_tr_sl=en&_x_tr_tl=te&_x_tr_hl=te&_x_tr_pto=tc"
      },
      {
        title: "సేంద్రీయ వ్యవసాయం",
        summary: "సేంద్రీయ ప్రమాణీకరణ మరియు మెరుగైన ధరలు.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        link: "https://www.bbc.com/telugu/topics/cjgn73k3rpyt"
      }
    ],
    hindi: [
      {
        title: "उन्नत कृषि तकनीकें",
        summary: "आधुनिक खेती की तकनीकें और मिट्टी की सेहत में सुधार।",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop",
        link: "https://www.etvbharat.com/hi/!state/100-farmers-of-the-state-will-go-abroad-to-study-advanced-agricultural-techniques-rajasthan-news-rjs25080705403"
      },
      {
        title: "एकीकृत कीट प्रबंधन",
        summary: "रसायनों के बिना कीटों से फसल की सुरक्षा के प्राकृतिक तरीके।",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop",
        link: "https://www-fao-org.translate.goog/pest-and-pesticide-management/ipm/integrated-pest-management/en/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc"
      },
      {
        title: "सरकारी किसान योजनाएं",
        summary: "किसानों के लिए सरकारी सहायता और वित्तीय योजनाएं।",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop",
        link: "https://www.amarujala.com/photo-gallery/utility/pm-kisan-yojana-21st-installment-be-released-by-pm-modi-know-reason-why-2025-08-19"
      },
      {
        title: "प्रिसिशन एग्रीकल्चर",
        summary: "AI और IoT का उपयोग करके स्मार्ट खेती।",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop",
        link: "https://igrownews.com/precision-agriculture-transforming-farming-with-technology/"
      },
      {
        title: "बाजार मूल्य विश्लेषण",
        summary: "फसल की कीमतों और बाजार के रुझान को समझना।",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=200&fit=crop",
        link: "https://hindi.moneycontrol.com/market"
      },
      {
        title: "जैविक खेती प्रमाणन",
        summary: "जैविक प्रमाणन प्राप्त करने और बेहतर दाम पाने के तरीके।",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        link: "https://nconf.dac.gov.in/StatusOrganicFarming"
      }
    ]
  };

  const productCategories = [
    {
      name: "Harvesters",
      products: [
        { name: "John Deere Combine Harvester", description: "High-efficiency grain harvesting", link: "https://www.amazon.in/bruder-02032-Combination-Agriculture-Accessories/dp/B07RRQCLV4/ref=sr_1_1?crid=29W1OC8CCS6E7&dib=eyJ2IjoiMSJ9.ew33IyLT3835Km5grY9plA6Lrzd2Db7SB_WU80y2hvHY6e15IOSb65QvhMfXUN72fcoLm2C7U5GYafmPlF_nyBLNTUT70nsZ3hdKQqqUmjNqpuxkt8q9I0ihrD-h2SzLkqc_W0L-BGNjFZw7OQAonoE3siT2W2qK66W-Na7FCXhCN4G00kc-p8EYZuEK8ehsfQon-EgclWqoB9CmERMSD_nlbM8NJvU-8jb3qW3Ktod3OdgLJ4q-HavByJH3VOwv-Qd1vuUl7yaal4MTEfezzTwR9fSzNdYGsJya91xKiGM.qNPe2AhX-hcf6RChNzigKKXcJPM0DrhCXOnbQ--5CkQ&dib_tag=se&keywords=John+Deere+Combine+Harvester&nsdOptOutParam=true&qid=1755618034&sprefix=combine+harvester%2Caps%2C5165&sr=8-1" },
        { name: "New Holland Harvester", description: "Advanced crop processing", link: "https://www.amazon.in/NewRay-Propelled-Harvester-Detachable-attacments/dp/B085T2W4CP/ref=sr_1_1?crid=1Y45AVOERWR2W&dib=eyJ2IjoiMSJ9.t7LKx9ztIn2N83edSuyfxdtLs8USMj_YMnreXhXFTzsMESS1TmfEwT-piD34cPaKERvZ95GBsQ_NOtk9mfX3ISKTaKNvAZTE4qCqRP2dDBQy7pgmUYNuGYNfEQ3Dww3SPbuPkw5H46n_47IyLS9p_Q.LZFa6MF21D7WY3pfiDk19qce0rxR113k5m8jhJki1-Y&dib_tag=se&keywords=new+holland+harvester&nsdOptOutParam=true&qid=1755618169&sprefix=new+holland+harvestee%2Caps%2C509&sr=8-1" },
        { name: "Case IH Axial Flow", description: "Superior grain quality", link: "https://www.amazon.in/RPM-Front-arms-Axial-Black/dp/B009PBYN08/ref=sr_1_1?dib=eyJ2IjoiMSJ9.gVPTlDJ3XO2Uz_JieeAROg.n6cR-lsxyY03i9qhiwTKu8epN2tuAjKX6uhQNqakJ3c&dib_tag=se&keywords=Case+IH+Axial+Flow&nsdOptOutParam=true&qid=1755618302&sr=8-1" },
        { name: "Claas Lexion", description: "Premium harvesting solution", link: "https://aax-eu-zaz.amazon.in/x/c/JJst1-Z9qrQqX3oD834nJzIAAAGYwwHQMwoAAAH2AQBvbm9fdHhuX2JpZDIgICBvbm9fdHhuX2ltcDIgICAmxO6J/clv1_CEuOPUxokZA0iHrVX_Z283_WGmlneaI7uZg_5zKL_OVQx38x4xioGf018HHz9hvVjq0yzpNb3X7OfU02AmcAAlk4B3yXTNPvOFkDa05JWVWgF4BZskfB8IkGXCQwUuW6XJeXalC7rdIQEQQ8kV_3ZVhXLA8QC8x8H15tWbp4Xgyay_2WjkwrSxutOI2vKbYuDzUcfMyagcpNBHhtJZhsefQQh8yliMIIKin6O61_zAYOsoJhkeWuV2gvjBmW5lJBN2PMN-SRnR9AjX0lL9xFahCwdXiTzSjwM7idy4T_aqUMLWWl1aK1xkuNcA7FBIOT3_cq0eVrbNPflpHpDeuLJftq8OdYBgBphasr5dhQHZ9u8F4iU2-W_yWr3JYqfnqDdhxLjmOcuEwp_BDYNaGsWEJJfarzhPBne-wSBml9tlZkUux_rAVrRF9I0bxcInIFH-Gzc_r6mO-bWyVNaReipMUTeUmOk2KifChiJ4snkeH1E39g8pKg8xPmTmFjVYOMr_VkwTthKoxWmj2Ajwi85x_bWgR-Y2A4Ly61XW_0GbfWKhOMGTd0mEAZAg3OfkfrU_0Pj89oQgyJhpZTgsU3XVSZOi98lgp6zP47jZipuW8Vvb-f_ZYgVnHu5zjScpWFM2scS8o1ABhn481pGpN64RMZzKfVYSRAaSMklNZt46USImgOQieFuVZChTbsXMN3-BYS1mU29vQTo8oPD2CVLmAY2pjebcnw8PznG0JUKgP1gCLffo9W_xQYz-QqFv--if5cMhLTn2TR5RPMYAbeH3RllibLAkpWt8pDeNEBQSWC8nkvH_B8gRhjnKuSSVOtVuWyajNb6VDKpuVsRc5qk4SjjEYnzP6yFOOEm8C7vGmRxFXhynMh-1XVvGCUvTL5rqIvkfwinyTmQ_ALU7ssEdOE4MyY9TJfJi0RDlbZoRTQlDtxI3YcZk9rYym_92iaxW-OX_qaw7XrvsHj8j-aX6pPOeCBabTk_XSiZw1dAOsrQjF9b1p-ZLGK6x__ZFogDjaj241V7lQYZLIQ26STlkdCtSF3DsmYhExf4IFtkyJnRGSCftmNGTT2T4FuKPRCSWqSVp_SGmg5C7GWQpynndH7fh_u3rVpV9ABBz1rNrLFCHyNIeJb_QheNIqHrOPXmsoiTdriq2g9B-EQ_FEnYlY6eMntHUr2MJEFt7f8pInC6ReMj3b7wYgXgjlvY_sdL32FAG2m6F3fGxsHiAXvLsKYzsB3oohh6jGJ2bpLG1rBNmUZUlq_xU65hC0UOKvVKeoToPejbUb8SZJIf8UlrEcy18BClLKT8wiYqRKrCND2d-pob9_Rn-wdowiG97QSNvUaVj-s7Ub21u4LdVgc3f3u5oU6-VlcT8p0O_RMids_jFepGVOQuMm2PULPcIxcThTxVGGjWyDEXhYZUomIU9KptDOLaV5e55c0w97hmz4TTDN69qUiKtclDzXtPCOloD8LAnjnspaoxT77RzXAZ36SxRuUZu0Pk7EVnPct0kEeoXDOCkuANmB61-I1oOGyoCfCdg8RQ-hJaKPZWsU3Xwv9o-bkNEnYEX2Id6gJgvey58Sh06CyOaRwA48Sq8xqQ5_OCW3t5ZPHXvjQH1g_TA1M3NTx0I1y8Iz9z3Tc_uywfWfDFFWMuwZZmlhUR7bnTHDIRH7I5LkJVnbWtj5EyakNdBW6akYGHLRDh_M9Wdr0K9Z-q5TeeVtwyPjpvduDnfx-KLHBu0B0pFjAm4YkDgLywAlxqC2bloNBMmuZyALy09vkm7k8NqR3_1byJ-0IlJMj5ymurJRdLv9PR4dP4FYrLOLUnXbvVO6WCirIn5KpT5Hfyrg68MIOQcKGvvMigVoudONGGM0PgcriJXjjCp6GprMOc8eaW8JbbiFpiCJ_kd37ZKa6gH86SKnWyfwJjdziQhNfkMio0DcRRDbKKuaErhN30tAoV4_1s6Nql00SLjRv2MjvcYZ77BS6FBBzi57BTSZiHOWp0LyFUb6VEnyHtP1iM1W4YK43EjfRKrLkFy9DL4SRb56HpB_4rk9hEfp2fh5lUY8yjVlft-rlmunmtNVPKc2VGeR6GBPW22WSHgjauzNynV-3ZprpNeNHJOe516hQQngggZKb1FXtSCsrGsH_gZGCeOYLmg5NRqvlD8Y0TTDMaatz29ghoES6SiU9xyUvOHotah6gV0756T-SHIqn2St2nEzdQ4FdRbJ-dd_3E8fZQuVAZW0dWzYp4_bgQonXk6rJubZRZeVD78unqOZtpwA7-ve8D11d1_sKTac0VXHHwpz0spSdWeAaYBi5TZazk1zrmDpsJu1AZvK4utqXnmms5lbhNzLMCtuLrltS-fcc/https://www.amazon.in/Cots-Cuddles-Painting-Children-Education/dp/B0D87SCV42/ref=sxbs_sbv_search_btf?content-id=amzn1.sym.fa654091-9aaa-43a3-ac17-a2ad95526fd2%3Aamzn1.sym.fa654091-9aaa-43a3-ac17-a2ad95526fd2&crid=SX745DOIS6CG&cv_ct_cx=Claas+Lexion&keywords=Claas+Lexion&pd_rd_i=B0D87SCV42&pd_rd_r=f4e2161e-a5d2-4951-8d08-37969337ab85&pd_rd_w=XrReC&pd_rd_wg=4PHRu&pf_rd_p=fa654091-9aaa-43a3-ac17-a2ad95526fd2&pf_rd_r=972VK46SX2WEM1EXS9JX&qid=1755618332&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=claas+lexion%2Caps%2C848&sr=1-1-f1821008-9dea-4812-b2b6-4a6e4a4f2d55" },
        { name: "Kubota Combine", description: "Compact and efficient", link: "https://www.amazon.in/Auxiliary-Suitable-Harvesters-Universal-Applications/dp/B095SSHR9D/ref=sr_1_1?crid=WX2J6EEVYTFR&dib=eyJ2IjoiMSJ9.YXtmksWFHhFZ1QATJ40k77P2cpEbnXnk0f2iIccXgHgdGozOQIdIJpXllQlBuFkhk7Z9yoQEh2ReOUxRHoRh728q277AtXekWZ-fy3SzMwyHfK3FLjp1WCaOqFFJ47lKPonpPPch4AM2cZQQV_Tr5i_e9GCT4AoVlQGWgaGNEnG_-5Fe1iiU7LR3JWPTJ0LZkRytsA81tEuFLMn_5PEbaP8v1tndxBf3i3ilncs_Tij-JcmArHC080jZhFpFX2qDGQrUYjaDXMTZ5GEEIX19sA8x58EMU8Arh4lIrSACQTE.a4gPxawfb0YGcQPIWD6rOT0vKA0E8vCCWYAXXtz7TJo&dib_tag=se&keywords=Kubota+Combine&qid=1755618382&sprefix=kubota+combine%2Caps%2C856&sr=8-1" },
        { name: "Massey Ferguson", description: "Reliable performance", link: "https://www.amazon.in/Auxiliary-Suitable-Harvesters-Universal-Applications/dp/B095SNQZL5/ref=sr_1_2?crid=WX2J6EEVYTFR&dib=eyJ2IjoiMSJ9.YXtmksWFHhFZ1QATJ40k77P2cpEbnXnk0f2iIccXgHgdGozOQIdIJpXllQlBuFkhk7Z9yoQEh2ReOUxRHoRh728q277AtXekWZ-fy3SzMwyHfK3FLjp1WCaOqFFJ47lKPonpPPch4AM2cZQQV_Tr5i_e9GCT4AoVlQGWgaGNEnG_-5Fe1iiU7LR3JWPTJ0LZkRytsA81tEuFLMn_5PEbaP8v1tndxBf3i3ilncs_Tij-JcmArHC080jZhFpFX2qDGQrUYjaDXMTZ5GEEIX19sA8x58EMU8Arh4lIrSACQTE.a4gPxawfb0YGcQPIWD6rOT0vKA0E8vCCWYAXXtz7TJo&dib_tag=se&keywords=Kubota+Combine&qid=1755618382&sprefix=kubota+combine%2Caps%2C856&sr=8-2" }
      ]
    },
    {
      name: "Seeds",
      products: [
        { name: "Hybrid Corn Seeds", description: "High-yield variety", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NzI5OTAzOTQ3MDk0MjM5OjE3NTU2MTg1MzU6c3BfYXRmOjMwMDIxMDExNDMyNzgzMjo6MDo6&url=%2FVIBEX-VXL-382-American-Sweet-Seeds%2Fdp%2FB08YWQ7977%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3UUBOGEH78MRI%26dib%3DeyJ2IjoiMSJ9.B0-2iesfPWKprz9ZIwgyLwQBcw086HE3zOyBzrMmUoMOYNFP20-MBMlBjTFilDFQYbQH8TEeeGmCkefOpGipRF7r9Vo6QEwHBGtixfrzwiiUK2VEEufKSordHzAv6NLBEC1bY4SLgtxBWtAwUs0iM-YAwQtydYIKDO-LLthAG87sfnHWxY7Jz-tkvpkfNfGJPHP2AeMkAB-04j1M4I-xBZInr9FctIf0fYod8d5jWOwIPWtdYFLdzFYH1CneNYUI-wZ7cmc7bh6mgYz9kYH2AqjGHtkUBBL4pwNdzLWVxo0.1mvBYEc8s6qev19lYQfoNWYBAQO83DVz733Hgv5aQBU%26dib_tag%3Dse%26keywords%3Dhybrid%2Bcorn%2Bseeds%252C%2Bwheat%252C%2Bsoyabean%252C%2Brice%252C%2Bvegetable%2Bseeds%26nsdOptOutParam%3Dtrue%26qid%3D1755618535%26sprefix%3Dhybrid%2Bcorn%2Bseeds%252C%2Bwheat%252C%2Bsoyabean%252C%2Brice%252C%2Bvegetable%2Bseeds%252Caps%252C446%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Wheat Seeds Premium", description: "Disease-resistant strain", link: "https://www.amazon.in/Organic-Nature-Soyabean-Protein-Natural/dp/B08PG2CBNX/ref=sr_1_2?crid=34ZPN7ZOZRZB7&dib=eyJ2IjoiMSJ9.DnAWzQfLWxtYlFR1l2GF1eozJ-CyPGhivKlsDf95vtbrv8H1SR445MLKjlRtmuqxERXH7GwQ4PD5DuOgus42dOL_8FIZ8W7G52DNVhST1gw.zHDso3wVoEhcnK_nkQFi-sWZFuS9A_tWE3_QxtcqTu8&dib_tag=se&keywords=soyabean%2C+cotton%2C+wheat+seeds&qid=1755618685&sprefix=soyabean%2C+cotton%2C+wheat+s%2Caps%2C812&sr=8-2" },
        { name: "Soybean Seeds", description: "Non-GMO variety", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NzI5OTAzOTQ3MDk0MjM5OjE3NTU2MTg1MzU6c3BfbXRmOjMwMDY0NjQ0NTg2NjkzMjo6MDo6&url=%2FResistant-Maturity-Gardening-Commercial-Cultivation%2Fdp%2FB0FJ7Q482V%2Fref%3Dsr_1_21_sspa%3Fcrid%3D3UUBOGEH78MRI%26dib%3DeyJ2IjoiMSJ9.B0-2iesfPWKprz9ZIwgyLwQBcw086HE3zOyBzrMmUoMOYNFP20-MBMlBjTFilDFQYbQH8TEeeGmCkefOpGipRF7r9Vo6QEwHBGtixfrzwiiUK2VEEufKSordHzAv6NLBEC1bY4SLgtxBWtAwUs0iM-YAwQtydYIKDO-LLthAG87sfnHWxY7Jz-tkvpkfNfGJPHP2AeMkAB-04j1M4I-xBZInr9FctIf0fYod8d5jWOwIPWtdYFLdzFYH1CneNYUI-wZ7cmc7bh6mgYz9kYH2AqjGHtkUBBL4pwNdzLWVxo0.1mvBYEc8s6qev19lYQfoNWYBAQO83DVz733Hgv5aQBU%26dib_tag%3Dse%26keywords%3Dhybrid%2Bcorn%2Bseeds%252C%2Bwheat%252C%2Bsoyabean%252C%2Brice%252C%2Bvegetable%2Bseeds%26nsdOptOutParam%3Dtrue%26qid%3D1755618535%26sprefix%3Dhybrid%2Bcorn%2Bseeds%252C%2Bwheat%252C%2Bsoyabean%252C%2Brice%252C%2Bvegetable%2Bseeds%252Caps%252C446%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Rice Seeds", description: "High protein content", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2ODY4NTM3NDc0OTk5NTIzOjE3NTU2MTg3MzY6c3BfYXRmOjIwMTQ4NjM0OTM3MTk4OjowOjo&url=%2FSampada-Foods-Agritech-Agriculture-Kg%2Fdp%2FB0BTPQR9VB%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1R4M2XT3YA2E2%26dib%3DeyJ2IjoiMSJ9.qlQ_LfoJvo6EXbMhaiK3M-DA2e3zkUsrQmjuRyDYEWMfAHFHVG9TEt481bsq-395wAjzxhnaTDsSwJBfu8UFRF6T-K_f0vJxrS_TET3lsPrl7S40zY0-fRMitLqB1aRAKGyFWkkMyjpgw7flK70OJP-EbtuDyOKst6vkqvOd0_imQm7MPeDWURgUZunBLL9O_R44ofA4KrWqoFZsu1opX-XtnA6eei6sGDyT-nxE4z7D0wknrC2d3ePMnlqhkRw6vDF3XTOjXOWgTfI9JD0G4znyD76u7b2HDLARpEsydgU.DMAeHkqLjV3K-etNE0vfarjiUMNotd5LxDjNYeGh5zo%26dib_tag%3Dse%26keywords%3Drice%2Bseeds%26qid%3D1755618736%26sprefix%3Drice%2Bse%252Caps%252C878%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1%26smid%3DA1GQLR11UU2XZO&sp_cr=ZAZ" },
        { name: "Vegetable Seed Mix", description: "Organic garden variety", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NzI5OTAzOTQ3MDk0MjM5OjE3NTU2MTg1MzU6c3BfYXRmOjIwMDI0MDM0Njk3NTk4OjowOjo&url=%2FUGAOO-Indian-Vegetable-Garden-Varieties%2Fdp%2FB09MLPKZ1T%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3UUBOGEH78MRI%26dib%3DeyJ2IjoiMSJ9.B0-2iesfPWKprz9ZIwgyLwQBcw086HE3zOyBzrMmUoMOYNFP20-MBMlBjTFilDFQYbQH8TEeeGmCkefOpGipRF7r9Vo6QEwHBGtixfrzwiiUK2VEEufKSordHzAv6NLBEC1bY4SLgtxBWtAwUs0iM-YAwQtydYIKDO-LLthAG87sfnHWxY7Jz-tkvpkfNfGJPHP2AeMkAB-04j1M4I-xBZInr9FctIf0fYod8d5jWOwIPWtdYFLdzFYH1CneNYUI-wZ7cmc7bh6mgYz9kYH2AqjGHtkUBBL4pwNdzLWVxo0.1mvBYEc8s6qev19lYQfoNWYBAQO83DVz733Hgv5aQBU%26dib_tag%3Dse%26keywords%3Dhybrid%2Bcorn%2Bseeds%252C%2Bwheat%252C%2Bsoyabean%252C%2Brice%252C%2Bvegetable%2Bseeds%26nsdOptOutParam%3Dtrue%26qid%3D1755618535%26sprefix%3Dhybrid%2Bcorn%2Bseeds%252C%2Bwheat%252C%2Bsoyabean%252C%2Brice%252C%2Bvegetable%2Bseeds%252Caps%252C446%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Cotton Seeds", description: "Long fiber variety", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2MDAzNjY2NDQ4OTE0ODc2OjE3NTU2MTg4Mjg6c3BfYXRmOjMwMDU5MTg4MjczMjczMjo6MDo6&url=%2FSky-life-Pamba-dana-gossypium%2Fdp%2FB07T2MTX8M%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1U2Z6I3SRKCRW%26dib%3DeyJ2IjoiMSJ9.aJXRMIGBVF-hvpMlhczChWAkUBxvf6KuUSe8filc9EpjFGzRDF6lXakzqbaeSZEM4fpjy7UXaBZiFjlOTw02DEvzN65ZzC0a0ARJYjn1B9m6dtWxXOci0JnW2NudbAXW2QTBCduqy7LF-YwcWPLKmwpwpChU4FRcUhCPxdbrZqW9P2YpHe6igvs01rMCjbHbPOIrpC_AV-P3MrGeZVBWV6DDhHqAKpRVyeDbZBZkRe-eaW2zjkA4lRY8zVs0HnnXAh1UtmUvoBGNV-zGBHYgDRP0jiWVE3_eOm4ac_pT-PA.9eBqhp0RSycMU8KwopAi7-WU1F6KgNUQ7ME5WTJhwO4%26dib_tag%3Dse%26keywords%3Dcotton%2Bseeds%26qid%3D1755618828%26sprefix%3Dcotton%252Caps%252C1299%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" }
      ]
    },
    {
      name: "Fertilizers",
      products: [
        { name: "NPK Complex Fertilizer", description: "Balanced nutrition", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NzQ3MTIxNTAwMDIyMzQ6MTc1NTYxODg2NjpzcF9hdGY6MzAwNjQxNTczNzU2MDMyOjowOjo&url=%2FPlantmedproTM-Penta-Boost-Nutri-Biofertilizer%2Fdp%2FB0FBGM3NFR%2Fref%3Dsr_1_1_sspa%3Fcrid%3DDVCYK5SAISO%26dib%3DeyJ2IjoiMSJ9.Lrz-A24FFc4lkk7495AQbDWXu-hiUFr4a4UEL5RTyD6PKLO718VjMFN6zNU7Xjl8sEaD2BfRZCpvFgOweRgQ2WCh7PHSyyMldB8cdyDZibfV5Uj-zEwYB7_Y0UgltKR-Np4d2GlfsZJY9P89zZB2PGSo_x2bhPwBEt227bne2Zwcj77yCSxUot5NSgMWoj7aiYuRmN7xp-ED00wAI_GMS768LgxYCobPy18oKBQmydW-PqZLdDtosDSsq_w3zv-_69SvA2iplVMj-ZPkPNZg4jmblL2c0BkSjFSCWctZAcc.U8VtbKnQibTELSbhw3CTUN-2MQwSJsuKFRZtwQDG0AA%26dib_tag%3Dse%26keywords%3DNPK%2BComplex%2BFertilizer%26qid%3D1755618866%26sprefix%3Dnpk%2Bcomplex%2Bfertilizer%252Caps%252C472%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Organic Compost", description: "100% natural", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NDEwNjU0NTUyMDY1MDc1OjE3NTU2MTg5MDA6c3BfYXRmOjMwMDA4NDI5MzI0MzEzMjo6MDo6&url=%2FBloombuddy-Organic-Vermicompost-Fertilizer-Manure%2Fdp%2FB0BCVVRL47%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2RJQH7N77H9OK%26dib%3DeyJ2IjoiMSJ9.QV-0XUcfS9ZGzOzKpmUrYodFeSPtl5zs6T2_9W8TZWxWcbC_rXmK1lE5bjUBiETigm_Dkt-nAYzDICAGSiV10f_DrUei19UqOJADoKNQ7WwHV61dR2k51b7UGxQYjTp6npv44c1Pa_Rn8T0ijkykUPgeSWlHeeDvTIyneEPRNCQgQi7SzV384h_i-xTc-SKRIKpb5zl2OkB8FBOUmEdZ6RyrESZ7A4l38ki8A6PYTzDDaajK41dDR-N1HpSzLktVBokFbaKlxWNN8_NvVtcdK3yrtIaa0W1Qk4dkzgul_Jk.a0m7jC5To1ZxNbyXuklU5II6YzW_YBcMhW3R9KUG_R0%26dib_tag%3Dse%26keywords%3DOrganic%2BCompost%26qid%3D1755618900%26sprefix%3Dnpk%2Bcomplex%2Bfertilizer%252Caps%252C1477%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Urea Fertilizer", description: "High nitrogen content", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxOTc3NDEwNjQ1ODQ3MTE5OjE3NTU2MTg5Mzc6c3BfYXRmOjMwMDI5NTk2OTMyMTczMjo6MDo6&url=%2FPREPLE-Fertilizer-Soluble-Vegetables-Production%2Fdp%2FB0DBDFQKVM%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1UYITFJJ0SQNQ%26dib%3DeyJ2IjoiMSJ9.vDwVCvhgcqkJIZsouF7VYiviC7uYcC1tkYBYVP33eUlKHqi4P2eXY3gBFlPkBYQRC-yCNGoaullh9KLg_CAWfTEI_JA_-Nd5-R4hI-JdoMR0MmQ1Hvo-9CjCsj-mz5VSXOj435k7ee21jHbWfe3_08uzIV_iiYLWKGKkdmj6DysicvdUE0YlHl-UhVXmiDPSojiWhTTJEU44Nm0FR7PTtBzsjqMGyw65bj3nX05ntaAIOK2SVUvKz8CuR7nq7UMIlXaY_pQoGznETIASdJqEabpM2P20MMheSzpqH2PpECI.JiX1LNtkUWdDk1NrL2V952XGEq8i39HzD-ipihHyiuE%26dib_tag%3Dse%26keywords%3DUrea%2BFertilizer%26qid%3D1755618937%26sprefix%3Dorganic%2Bcompost%252Caps%252C2098%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Phosphate Fertilizer", description: "Root development", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzgwMjIwNzE4MzI1NzA6MTc1NTYxODk4MDpzcF9hdGY6MzAwNTEyNjIzNTYzNjMyOjowOjo&url=%2FCasa-Amor-Phosphate-Fertilizer-Flowering%2Fdp%2FB09PNGK743%2Fref%3Dsr_1_1_sspa%3Fcrid%3D38DKRW1BFPHA0%26dib%3DeyJ2IjoiMSJ9.yLXfSKQmOWR7Si0G5YRXU_R1UO5VLHSm8ixNcBRLoFQGHBDWOJ6txd-PUFwExlBC2R2FRbgR7AmvvnWG5EloOt4LMmS4B9M2X60ivi2A9YOfkkvYDcIxe8VTXctyLQrY6hh4oZq8OHQ6cWgE7FVEiIVGA9h4tHDhFzhO0vSK6-0zmbsq0Q-rVjdoksqS8aGdShilmT3U7Y0Roi__uc8JQtTXUr9qjZ7895po5csjsQ2L0tqHecmIt-O9W7ZiumVrNKH2KBHdaByWQEMtACTbkG5pXmhFT6T0zdY982JpDKM.sqSdeOCZgvH8NcMQFVet3vPn7QVMGaWKcakLw0dnYoU%26dib_tag%3Dse%26keywords%3Dphosphate%2Bfertilizer%26qid%3D1755618980%26sprefix%3Dphospate%2Bfertilizer%252Caps%252C827%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Liquid Fertilizer", description: "Quick absorption", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMzQ1MTQ3ODA5MzkxNjMxOjE3NTU2MTkwMTM6c3BfYXRmOjIwMDE2MzAyNTQ0MTAyOjowOjo&url=%2FOrganoMagic-Liquid-Booster-Organic-Fertilizer%2Fdp%2FB01N0X446I%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1713M48KSQKLO%26dib%3DeyJ2IjoiMSJ9.Aq80BvKcO8RZ3keHqLtoGB_YtBl7yJsQXmBvUzdmpyaok2-6Aki3VZOLDtMHVpk2chZLrs-pF2Mdz2Pyxj_-Junal_5S0-KOwkEWrX5HJq8GeaTWzmsKcoyLQ5ClqemlCXhen3W7H8CCoy3p-2IOWsMOQqeZhXvwY0OM6QNxcB3-DzYLss5MBUULisbAuk1gjSrtD1atB7dcUXTr3G1RAtogK_CbmLEOj9keOnmUhst4p0Rw7Q7jQhvilxBnhvpSy-KMZztURxL0J3JFkFt6K9BEiGQu_LZsYg2NFReBsz4.qQvkd7D8BhMt5qJfhHDZX9PfUlPlFxzi38b6tTTMM1U%26dib_tag%3Dse%26keywords%3Dliquid%2Bfertilizer%26qid%3D1755619013%26sprefix%3Dliquid%2Bfertilizer%252Caps%252C431%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Bio-fertilizer", description: "Microbial enhanced", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4NDk2NzU4NDI4NjAzODkzOjE3NTU2MTkwNzg6c3BfYXRmOjMwMDQ2NjIyNjczNTIzMjo6MDo6&url=%2FGarden-Genie-Biofertilizer-Organic-Booster%2Fdp%2FB0DMVSPYQQ%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3MHOW3Y0KGV51%26dib%3DeyJ2IjoiMSJ9.lcWgGazuSNoWcrvFpuLSpN52G5pBIJPRlUKXOhCZ3Wixn-av7qqWk-k3MVa9C5VlcSupwXVj2bWWIHl1lyzeKGuIKpKMec9OaOUnw2mkxYDdNEXu5_T4tfSvVfymM0GRZYTYhuTWHJ2JpdYEtSfeAUAQn4jZacBF5MbhjqWOlcVOgihkZDxwtPgxWLWwHQE9UI4J6xXpdcC0sWrjRb0kSDMTyNz8hE89Xv1Vz1qDJVkFI7rR-LmWL9gxH5iyqtTklMwz8eJ5NxWYaMsit5q7W85YEraAqmJFdcmb7r2mmwc.aJE7hvC20rB7UukSy_XXrXKoh_bxEDiI0QpTiisqMZc%26dib_tag%3Dse%26keywords%3Dbio%2Bfertilizer%26qid%3D1755619078%26sprefix%3Dbio%2Bfertilizer%252Caps%252C934%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" }
      ]
    },
    {
      name: "Tractors",
      products: [
        { name: "John Deere 5075E", description: "75 HP utility tractor", link: "https://www.amazon.in/John-Deere-Lawn-Tractor-Scale/dp/B01BYSO37C/ref=sr_1_3?crid=WLFALWG5NR7D&dib=eyJ2IjoiMSJ9.2T5BJ4n3D_e6w6nVCXspLMWkOxj9r6jM6SHyTWzfRqEn8IDh82WnFIex-aZ-Tm5azs8HaRIyU0Tw9kdxoQ6aM-bq51KnyB7u5eNjQtLLw_6e5G7NQmpGksfHMrU0gFLrX9yENt9Dm7GWKu7hL5VJfdEAHH764S_vts7W6mWKSYBduu0bcT5QqBCkkpk1iuIjHO-1sAqdWwk0xvVm-gcBUPaEe_D0nwmLZE_L5CGJqeYDJV-DgGW5y3OVPdko2vQ4xtW1buyQpgJb1zbMjERrzHGwoZXgVw4WeIJ0jpfH5P4.pr7DkWEZEvY1Trrg_UAYv01-woNKnBkQMm-pqveRZ14&dib_tag=se&keywords=John+Deere+5075E&nsdOptOutParam=true&qid=1755619114&sprefix=bio+fertilizer%2Caps%2C1426&sr=8-3" },
        { name: "Mahindra 2638", description: "38 HP compact tractor", link: "https://www.amazon.in/Badal-Graphics-Mahindra-Accessories-Letters/dp/B0DFY6QFZ8/ref=sr_1_1?crid=2RA5DWP187S3V&dib=eyJ2IjoiMSJ9._0ZcyARm0CZoY6rBgYRnxNirkaZq6BTETLNRzp9kb491eQvBj9EDDJftIHeb2GagNOUwBM__AGaLAcjIlBfKeTm9JSfu6l8nX3Ws9itlpXw.m6oHVG3nrnKbqchl-S8leRuHg-vHMFJ9HEeFb4mRrTo&dib_tag=se&keywords=Mahindra+2638&qid=1755619152&sprefix=john+deere+5075e%2Caps%2C2088&sr=8-1" },
        { name: "Kubota M7-172", description: "172 HP premium tractor", link: "https://www.amazon.in/NEPTUNE-SIMPLIFY-FARMING-Cultivator-Rotavator/dp/B072F3FDZR/ref=sr_1_13?crid=2C07UNM7V35PH&dib=eyJ2IjoiMSJ9.AhfP_ZNol4PJ5l-gNauqyOu6hkB74o7g7YTYN1dmBajwyCAWaulOdXPEXqUUFcrVzj3d57iezTbm3mhquIpdwr3c6kAIOvUVV2dHAG8W0xybAamaFdTj7VWzmxREY919Ir8_Ompz7cWPRZUrWEZicsd-y1MC0ap3KRZDEI1uvrzY_zmJ_xqXP2vPDJNvTEXDGppRdxHdCQ8BBLSULSoPTrLZ4np0LUusGTAlUoXN260oFX7kNyOATPuL8MmKAJAux_cqoemmFtNAFKf2qPIQPBbKgS4Tjy9ZAW7cPFJI6Us.y_FuF0hI8V1vbKGPiHzIkx_Y5X9S4tBCEA5DWJb_hfg&dib_tag=se&keywords=tractors+for+agriculture&qid=1755619245&sprefix=tractors+for+%2Caps%2C2322&sr=8-13" },
        { name: "Case IH Farmall", description: "Versatile farming solution", link: "https://www.amazon.in/HYCO-Agriculture-Sprayer-Pressure-Stainless/dp/B0D71M5CC4/ref=sr_1_10?crid=2C07UNM7V35PH&dib=eyJ2IjoiMSJ9.AhfP_ZNol4PJ5l-gNauqyOu6hkB74o7g7YTYN1dmBajwyCAWaulOdXPEXqUUFcrVzj3d57iezTbm3mhquIpdwr3c6kAIOvUVV2dHAG8W0xybAamaFdTj7VWzmxREY919Ir8_Ompz7cWPRZUrWEZicsd-y1MC0ap3KRZDEI1uvrzY_zmJ_xqXP2vPDJNvTEXDGppRdxHdCQ8BBLSULSoPTrLZ4np0LUusGTAlUoXN260oFX7kNyOATPuL8MmKAJAux_cqoemmFtNAFKf2qPIQPBbKgS4Tjy9ZAW7cPFJI6Us.y_FuF0hI8V1vbKGPiHzIkx_Y5X9S4tBCEA5DWJb_hfg&dib_tag=se&keywords=tractors+for+agriculture&qid=1755619245&sprefix=tractors+for+%2Caps%2C2322&sr=8-10" },
        { name: "New Holland T4", description: "Mid-range efficiency", link: "https://www.amazon.in/DEOXY-Agriculture-Tractor-Trolley-Friction/dp/B0CSSVC84Z/ref=sr_1_6?crid=2C07UNM7V35PH&dib=eyJ2IjoiMSJ9.AhfP_ZNol4PJ5l-gNauqyOu6hkB74o7g7YTYN1dmBajwyCAWaulOdXPEXqUUFcrVzj3d57iezTbm3mhquIpdwr3c6kAIOvUVV2dHAG8W0xybAamaFdTj7VWzmxREY919Ir8_Ompz7cWPRZUrWEZicsd-y1MC0ap3KRZDEI1uvrzY_zmJ_xqXP2vPDJNvTEXDGppRdxHdCQ8BBLSULSoPTrLZ4np0LUusGTAlUoXN260oFX7kNyOATPuL8MmKAJAux_cqoemmFtNAFKf2qPIQPBbKgS4Tjy9ZAW7cPFJI6Us.y_FuF0hI8V1vbKGPiHzIkx_Y5X9S4tBCEA5DWJb_hfg&dib_tag=se&keywords=tractors+for+agriculture&qid=1755619245&sprefix=tractors+for+%2Caps%2C2322&sr=8-6" },
        { name: "Fendt 700 Vario", description: "High-tech precision", link: "https://www.amazon.in/Vandana-Agriculture-Tractor-Trolley-Blue/dp/B07NPRM8BT/ref=sr_1_3?crid=2C07UNM7V35PH&dib=eyJ2IjoiMSJ9.AhfP_ZNol4PJ5l-gNauqyOu6hkB74o7g7YTYN1dmBajwyCAWaulOdXPEXqUUFcrVzj3d57iezTbm3mhquIpdwr3c6kAIOvUVV2dHAG8W0xybAamaFdTj7VWzmxREY919Ir8_Ompz7cWPRZUrWEZicsd-y1MC0ap3KRZDEI1uvrzY_zmJ_xqXP2vPDJNvTEXDGppRdxHdCQ8BBLSULSoPTrLZ4np0LUusGTAlUoXN260oFX7kNyOATPuL8MmKAJAux_cqoemmFtNAFKf2qPIQPBbKgS4Tjy9ZAW7cPFJI6Us.y_FuF0hI8V1vbKGPiHzIkx_Y5X9S4tBCEA5DWJb_hfg&dib_tag=se&keywords=tractors+for+agriculture&qid=1755619245&sprefix=tractors+for+%2Caps%2C2322&sr=8-3" }
      ]
    },
    {
      name: "Irrigation",
      products: [
        { name: "Drip Irrigation Kit", description: "Water-efficient system", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyNzA0NDAzMjU4MTQ4MTI6MTc1NTYxOTM4NDpzcF9hdGY6MzAwNTkzMTY2MTIyOTMyOjowOjo&url=%2FFABITTO-Irrigation-Garden-Watering-Plants%2Fdp%2FB082J4FD43%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1BZVXAJ0Y44MZ%26dib%3DeyJ2IjoiMSJ9.4jmeEhIkGvikQTAiSa9FkJmeMkTUnD9A96jzQ0UDAyLCE6foQyU7jmdNvK14DmXun3uA7o2vYPMcdj6SNziaTc-azKXDHIhD94HFpPYqAI9m92l3KFbUTaOgr-Cnsc9dbqJWyTzu1RxIO1ji2tjdFwU1nPamaAg73vh4a8lpSpq3ImzvHfFD2jvPK4Xz0OMOqxWTS1SNY1t5_KGD8XjzmSYUr70oMP-2cxJarxF9VWn4bavYFFNg5FupoMvyKnNXBpZyTpVSF3CqaDw4gds-5HfaxjGLSdsHG8QpSN05WvM.6kb-fRLiAuUdtDdrw0ypXU41LAa7k1SKj_pQnBf-dWU%26dib_tag%3Dse%26keywords%3Dirrigation%2Bkits%26qid%3D1755619384%26sprefix%3Dirriga%252Caps%252C2030%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Sprinkler System", description: "Automated watering", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyNzA0NDAzMjU4MTQ4MTI6MTc1NTYxOTM4NDpzcF9hdGY6MzAwNjM4NTcxMTY0OTMyOjowOjo&url=%2FJivandhara-Irrigation-Garden-Watering-Plants%2Fdp%2FB07TY25BVP%2Fref%3Dsr_1_4_sspa%3Fcrid%3D1BZVXAJ0Y44MZ%26dib%3DeyJ2IjoiMSJ9.4jmeEhIkGvikQTAiSa9FkJmeMkTUnD9A96jzQ0UDAyLCE6foQyU7jmdNvK14DmXun3uA7o2vYPMcdj6SNziaTc-azKXDHIhD94HFpPYqAI9m92l3KFbUTaOgr-Cnsc9dbqJWyTzu1RxIO1ji2tjdFwU1nPamaAg73vh4a8lpSpq3ImzvHfFD2jvPK4Xz0OMOqxWTS1SNY1t5_KGD8XjzmSYUr70oMP-2cxJarxF9VWn4bavYFFNg5FupoMvyKnNXBpZyTpVSF3CqaDw4gds-5HfaxjGLSdsHG8QpSN05WvM.6kb-fRLiAuUdtDdrw0ypXU41LAa7k1SKj_pQnBf-dWU%26dib_tag%3Dse%26keywords%3Dirrigation%2Bkits%26qid%3D1755619384%26sprefix%3Dirriga%252Caps%252C2030%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&sp_cr=ZAZ" },
        { name: "Soaker Hoses", description: "Deep root watering", link: "https://www.amazon.in/Kemendra%C2%AE-Irrigation-Self-Watering-Automatic-Devices/dp/B0DQV5MPTT/ref=sr_1_5?crid=1BZVXAJ0Y44MZ&dib=eyJ2IjoiMSJ9.4jmeEhIkGvikQTAiSa9FkJmeMkTUnD9A96jzQ0UDAyLCE6foQyU7jmdNvK14DmXun3uA7o2vYPMcdj6SNziaTc-azKXDHIhD94HFpPYqAI9m92l3KFbUTaOgr-Cnsc9dbqJWyTzu1RxIO1ji2tjdFwU1nPamaAg73vh4a8lpSpq3ImzvHfFD2jvPK4Xz0OMOqxWTS1SNY1t5_KGD8XjzmSYUr70oMP-2cxJarxF9VWn4bavYFFNg5FupoMvyKnNXBpZyTpVSF3CqaDw4gds-5HfaxjGLSdsHG8QpSN05WvM.6kb-fRLiAuUdtDdrw0ypXU41LAa7k1SKj_pQnBf-dWU&dib_tag=se&keywords=irrigation+kits&qid=1755619384&sprefix=irriga%2Caps%2C2030&sr=8-5" },
        { name: "Smart Water Timer", description: "App-controlled timing", link: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4NjA5MjI3MjYzMjIyMjI1OjE3NTU2MTkzODQ6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDUwODQzMDk2MDczMjo6MTo6&url=%2FHanging-Atomizing-Greenhouse-Irrigation-connectors%2Fdp%2FB09JSKW337%2Fref%3Dsxin_14_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D1BZVXAJ0Y44MZ%26cv_ct_cx%3Dirrigation%2Bkits%26keywords%3Dirrigation%2Bkits%26pd_rd_i%3DB09JSKW337%26pd_rd_r%3Db45add68-b7b7-484b-8978-935ce21605e3%26pd_rd_w%3DOZhlF%26pd_rd_wg%3Dzy3Ka%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DRYJX02SKDXGJ0M8EMVZ3%26qid%3D1755619384%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dirriga%252Caps%252C2030%26sr%3D1-2-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&sp_cr=ZAZ" },
        { name: "Micro Sprinklers", description: "Precision watering", link: "https://www.amazon.in/ELEPHANTBOAT%C2%AE-Adjustable-Automatic-Irrigation-Greenhouse/dp/B0BSYB8RC2/ref=sr_1_14?crid=1BZVXAJ0Y44MZ&dib=eyJ2IjoiMSJ9.4jmeEhIkGvikQTAiSa9FkJmeMkTUnD9A96jzQ0UDAyLCE6foQyU7jmdNvK14DmXun3uA7o2vYPMcdj6SNziaTc-azKXDHIhD94HFpPYqAI9m92l3KFbUTaOgr-Cnsc9dbqJWyTzu1RxIO1ji2tjdFwU1nPamaAg73vh4a8lpSpq3ImzvHfFD2jvPK4Xz0OMOqxWTS1SNY1t5_KGD8XjzmSYUr70oMP-2cxJarxF9VWn4bavYFFNg5FupoMvyKnNXBpZyTpVSF3CqaDw4gds-5HfaxjGLSdsHG8QpSN05WvM.6kb-fRLiAuUdtDdrw0ypXU41LAa7k1SKj_pQnBf-dWU&dib_tag=se&keywords=irrigation+kits&qid=1755619384&sprefix=irriga%2Caps%2C2030&sr=8-14" },
        { name: "Water Pump System", description: "High-pressure delivery", link: "https://www.amazon.in/APPSTER-Drip-Irrigation-Accessories-Kit/dp/B0BFKXHXQR/ref=sr_1_19?crid=1BZVXAJ0Y44MZ&dib=eyJ2IjoiMSJ9.4jmeEhIkGvikQTAiSa9FkJmeMkTUnD9A96jzQ0UDAyLCE6foQyU7jmdNvK14DmXun3uA7o2vYPMcdj6SNziaTc-azKXDHIhD94HFpPYqAI9m92l3KFbUTaOgr-Cnsc9dbqJWyTzu1RxIO1ji2tjdFwU1nPamaAg73vh4a8lpSpq3ImzvHfFD2jvPK4Xz0OMOqxWTS1SNY1t5_KGD8XjzmSYUr70oMP-2cxJarxF9VWn4bavYFFNg5FupoMvyKnNXBpZyTpVSF3CqaDw4gds-5HfaxjGLSdsHG8QpSN05WvM.6kb-fRLiAuUdtDdrw0ypXU41LAa7k1SKj_pQnBf-dWU&dib_tag=se&keywords=irrigation+kits&qid=1755619384&sprefix=irriga%2Caps%2C2030&sr=8-19" }
      ]
    },
    {
      name: "Tools",
      products: [
        { name: "Garden Tool Set", description: "Complete farming toolkit", link: "https://amazon.com/tools1" },
        { name: "Pruning Shears", description: "Professional grade cutting", link: "https://amazon.com/tools2" },
        { name: "Soil pH Meter", description: "Digital soil testing", link: "https://amazon.com/tools3" },
        { name: "Wheelbarrow Heavy Duty", description: "Large capacity transport", link: "https://amazon.com/tools4" },
        { name: "Hand Cultivator", description: "Soil preparation tool", link: "https://amazon.com/tools5" },
        { name: "Harvest Baskets", description: "Durable collection bins", link: "https://amazon.com/tools6" }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [categoryOrder, setCategoryOrder] = useState([0, 1, 2, 3, 4, 5]);

  const shuffleCategories = () => {
    const newOrder = [...categoryOrder].sort(() => Math.random() - 0.5);
    setCategoryOrder(newOrder);
  };

  const getSearchQuery = () => {
    const queries = {
      english: "English blogs regarding crop management farming techniques",
      telugu: "Telugu blogs regarding crop management farming techniques వ్యవసాయ",
      hindi: "Hindi blogs regarding crop management farming techniques कृषि"
    };
    return queries[selectedLanguage as keyof typeof queries];
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <section className="section-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TypingAnimation
              text="Welcome Folk, ready to cultivate success? Let's get started."
              onComplete={handleTypingComplete}
              className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8"
              speed={60}
            />
          </div>
        </div>
      </section>

      {contentReady && (
        <>
          {/* Language Selector */}
          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8">Choose Your Language</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["english", "telugu", "hindi"].map((lang) => (
                  <Button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`language-btn ${selectedLanguage === lang ? 'active' : ''}`}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </Button>
                ))}
              </div>
              <p className="text-muted-foreground">
                Don't see your language?{" "}
                <Link 
                  to="/contact?subject=Language%20Insertion%20Request"
                  className="text-primary hover:underline"
                >
                  Write to us!
                </Link>{" "}
                We are always looking to expand our reach.
              </p>
            </div>
          </section>

          {/* Recent Blogs Section */}
          <section id="blogs" className="section-accent py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-playfair font-bold mb-4">Recent Blogs</h2>
                <p className="text-muted-foreground">Stay updated with the latest in agriculture</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {blogData[selectedLanguage as keyof typeof blogData].map((blog, index) => (
                  <Card key={index} className="blog-card">
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{blog.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{blog.summary}</p>
                      <a 
                        href={blog.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="w-full">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read This Article
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <a 
                  href={`https://www.google.com/search?q=${encodeURIComponent(getSearchQuery())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* E-Shop Section */}
          <section id="eshop" className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-playfair font-bold mb-4">Integrated E-Shop</h2>
                <p className="text-muted-foreground mb-8">Search for your needs</p>
                
                <div className="flex justify-center gap-4 mb-8">
                  <Button 
                    className="bg-gradient-primary hover:opacity-90"
                    onClick={() => setSelectedCategory(0)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Essentials
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={shuffleCategories}
                    className="hover:bg-accent hover:text-accent-foreground"
                  >
                    <Shuffle className="h-4 w-4 mr-2" />
                    Update
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="0" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                  {categoryOrder.map((categoryIndex, index) => (
                    <TabsTrigger 
                      key={categoryIndex} 
                      value={categoryIndex.toString()}
                      className="text-xs lg:text-sm"
                    >
                      {productCategories[categoryIndex].name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categoryOrder.map((categoryIndex) => (
                  <TabsContent key={categoryIndex} value={categoryIndex.toString()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {productCategories[categoryIndex].products.map((product, index) => (
                        <Card key={index} className="product-card">
                          <CardHeader>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-sm">{product.description}</p>
                            <a 
                              href={product.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-block w-full"
                            >
                              <Button className="w-full bg-gradient-sunset hover:opacity-90">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Buy Now
                              </Button>
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  Please note: Product links will redirect to external websites and are not available in translated languages.
                </p>
              </div>
            </div>
          </section>

          {/* Financial Tracking Section */}
          <section className="section-accent py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Card className="border-0 shadow-medium">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <DollarSign className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-playfair">Financial Tracking</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Financial tracking helps farmers manage their finances effectively, understand government schemes, 
                      and improve profitability through data-driven insights and smart budgeting tools.
                    </p>
                    <a 
                      href="https://pmkisan.gov.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="btn-hero">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Check Loan Status
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Marketplace Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Card className="border-0 shadow-medium">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-playfair">Marketplace</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Our marketplace connects farmers directly with buyers, eliminating middlemen and ensuring 
                      fair prices for your produce while building sustainable agricultural relationships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://forms.gle/oa9Do6qVP6YowricA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-primary hover:opacity-90">
                          <UserCheck className="h-5 w-5 mr-2" />
                          Join Now
                        </Button>
                      </a>
                      <Button 
                        variant="outline"
                        onClick={() => alert("Buyers are currently unavailable. We will inform you soon!")}
                      >
                        <Users className="h-5 w-5 mr-2" />
                        Buyers List
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Freelance Section */}
          <section className="section-accent py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Card className="border-0 shadow-medium">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <UserCheck className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-playfair">Freelance Advisory</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Experienced farmers can earn money by providing expert advice to fellow farmers through 
                      text, voice, or video messages in their native language, sharing valuable knowledge and experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://forms.gle/82nyccfgKJXgXug36" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-sunset hover:opacity-90">
                          <UserCheck className="h-5 w-5 mr-2" />
                          Join Now
                        </Button>
                      </a>
                      <Button 
                        variant="outline"
                        onClick={() => alert("Video currently can't be displayed due to website issues.")}
                      >
                        <Play className="h-5 w-5 mr-2" />
                        How it Works!
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Dashboard;
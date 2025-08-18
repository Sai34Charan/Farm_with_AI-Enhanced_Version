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
        link: "https://www.example.com/crop-rotation"
      },
      {
        title: "Integrated Pest Management Guide",
        summary: "Sustainable approaches to pest control without harmful chemicals.",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop",
        link: "https://www.example.com/pest-management"
      },
      {
        title: "Government Farming Schemes 2025",
        summary: "Latest government initiatives and financial support for farmers.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop",
        link: "https://www.example.com/govt-schemes"
      },
      {
        title: "Precision Agriculture Technology",
        summary: "Using AI and IoT for smart farming and increased productivity.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop",
        link: "https://www.example.com/precision-ag"
      },
      {
        title: "Market Price Analysis",
        summary: "Understanding crop price trends and market dynamics.",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=200&fit=crop",
        link: "https://www.example.com/market-analysis"
      },
      {
        title: "Organic Farming Certification",
        summary: "Steps to obtain organic certification and premium pricing.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        link: "https://www.example.com/organic-farming"
      }
    ],
    telugu: [
      {
        title: "వ్యవసాయ నూతన పద్ధతులు",
        summary: "ఆధునిక వ్యవసాయ పద్ధతులు మరియు మట్టి ఆరోగ్యం మెరుగుపరచడం.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop",
        link: "https://www.example.com/telugu-farming"
      },
      {
        title: "పంట రక్షణ సహజ పద్ధతులు",
        summary: "రసాయనాలు లేకుండా పంటలను కీటకాల నుండి రక్షించడం.",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop",
        link: "https://www.example.com/telugu-pest"
      },
      {
        title: "ప్రభుత్వ రైతు పథకాలు",
        summary: "రైతులకు ప్రభుత్వ సహాయం మరియు వర్ధకం పథకాలు.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop",
        link: "https://www.example.com/telugu-schemes"
      },
      {
        title: "ఆధునిక వ్యవసాయ సాంకేతికత",
        summary: "AI మరియు IoT ఉపయోగించి స్మార్ట్ వ్యవసాయం.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop",
        link: "https://www.example.com/telugu-tech"
      },
      {
        title: "మార్కెట్ ధరల విశ్లేషణ",
        summary: "పంట ధరలు మరియు మార్కెట్ ట్రెండ్స్ అర్థం చేసుకోవడం.",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=200&fit=crop",
        link: "https://www.example.com/telugu-market"
      },
      {
        title: "సేంద్రీయ వ్యవసాయం",
        summary: "సేంద్రీయ ప్రమాణీకరణ మరియు మెరుగైన ధరలు.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        link: "https://www.example.com/telugu-organic"
      }
    ],
    hindi: [
      {
        title: "उन्नत कृषि तकनीकें",
        summary: "आधुनिक खेती की तकनीकें और मिट्टी की सेहत में सुधार।",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop",
        link: "https://www.example.com/hindi-farming"
      },
      {
        title: "एकीकृत कीट प्रबंधन",
        summary: "रसायनों के बिना कीटों से फसल की सुरक्षा के प्राकृतिक तरीके।",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=200&fit=crop",
        link: "https://www.example.com/hindi-pest"
      },
      {
        title: "सरकारी किसान योजनाएं",
        summary: "किसानों के लिए सरकारी सहायता और वित्तीय योजनाएं।",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop",
        link: "https://www.example.com/hindi-schemes"
      },
      {
        title: "प्रिसिशन एग्रीकल्चर",
        summary: "AI और IoT का उपयोग करके स्मार्ट खेती।",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop",
        link: "https://www.example.com/hindi-tech"
      },
      {
        title: "बाजार मूल्य विश्लेषण",
        summary: "फसल की कीमतों और बाजार के रुझान को समझना।",
        image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=200&fit=crop",
        link: "https://www.example.com/hindi-market"
      },
      {
        title: "जैविक खेती प्रमाणन",
        summary: "जैविक प्रमाणन प्राप्त करने और बेहतर दाम पाने के तरीके।",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        link: "https://www.example.com/hindi-organic"
      }
    ]
  };

  const productCategories = [
    {
      name: "Harvesters",
      products: [
        { name: "John Deere Combine Harvester", description: "High-efficiency grain harvesting", link: "https://amazon.com/harvester1" },
        { name: "New Holland Harvester", description: "Advanced crop processing", link: "https://amazon.com/harvester2" },
        { name: "Case IH Axial Flow", description: "Superior grain quality", link: "https://amazon.com/harvester3" },
        { name: "Claas Lexion", description: "Premium harvesting solution", link: "https://amazon.com/harvester4" },
        { name: "Kubota Combine", description: "Compact and efficient", link: "https://amazon.com/harvester5" },
        { name: "Massey Ferguson", description: "Reliable performance", link: "https://amazon.com/harvester6" }
      ]
    },
    {
      name: "Seeds",
      products: [
        { name: "Hybrid Corn Seeds", description: "High-yield variety", link: "https://amazon.com/seeds1" },
        { name: "Wheat Seeds Premium", description: "Disease-resistant strain", link: "https://amazon.com/seeds2" },
        { name: "Soybean Seeds", description: "Non-GMO variety", link: "https://amazon.com/seeds3" },
        { name: "Rice Seeds", description: "High protein content", link: "https://amazon.com/seeds4" },
        { name: "Vegetable Seed Mix", description: "Organic garden variety", link: "https://amazon.com/seeds5" },
        { name: "Cotton Seeds", description: "Long fiber variety", link: "https://amazon.com/seeds6" }
      ]
    },
    {
      name: "Fertilizers",
      products: [
        { name: "NPK Complex Fertilizer", description: "Balanced nutrition", link: "https://amazon.com/fertilizer1" },
        { name: "Organic Compost", description: "100% natural", link: "https://amazon.com/fertilizer2" },
        { name: "Urea Fertilizer", description: "High nitrogen content", link: "https://amazon.com/fertilizer3" },
        { name: "Phosphate Fertilizer", description: "Root development", link: "https://amazon.com/fertilizer4" },
        { name: "Liquid Fertilizer", description: "Quick absorption", link: "https://amazon.com/fertilizer5" },
        { name: "Bio-fertilizer", description: "Microbial enhanced", link: "https://amazon.com/fertilizer6" }
      ]
    },
    {
      name: "Tractors",
      products: [
        { name: "John Deere 5075E", description: "75 HP utility tractor", link: "https://amazon.com/tractor1" },
        { name: "Mahindra 2638", description: "38 HP compact tractor", link: "https://amazon.com/tractor2" },
        { name: "Kubota M7-172", description: "172 HP premium tractor", link: "https://amazon.com/tractor3" },
        { name: "Case IH Farmall", description: "Versatile farming solution", link: "https://amazon.com/tractor4" },
        { name: "New Holland T4", description: "Mid-range efficiency", link: "https://amazon.com/tractor5" },
        { name: "Fendt 700 Vario", description: "High-tech precision", link: "https://amazon.com/tractor6" }
      ]
    },
    {
      name: "Irrigation",
      products: [
        { name: "Drip Irrigation Kit", description: "Water-efficient system", link: "https://amazon.com/irrigation1" },
        { name: "Sprinkler System", description: "Automated watering", link: "https://amazon.com/irrigation2" },
        { name: "Soaker Hoses", description: "Deep root watering", link: "https://amazon.com/irrigation3" },
        { name: "Smart Water Timer", description: "App-controlled timing", link: "https://amazon.com/irrigation4" },
        { name: "Micro Sprinklers", description: "Precision watering", link: "https://amazon.com/irrigation5" },
        { name: "Water Pump System", description: "High-pressure delivery", link: "https://amazon.com/irrigation6" }
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
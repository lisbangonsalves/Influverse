import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-1/240503302_176105491199245_5803899453049893382_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vsBrYJGCTEgAX8y2pBx&_nc_ht=scontent.fbom20-2.fna&oh=00_AfACeeoFoZ2pZBunVqKfVz39AIiPH1hopTinMsPcfddzfg&oe=66013460" />,
    name: 'LuxeStyle Cosmetics',
    occupation: 'Marketer',
    testimonial:
      "As a marketer, I found the platform incredibly intuitive and user-friendly. The ability to connect with influencers seamlessly has significantly boosted our campaign effectiveness. Highly recommend!",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="https://i.dailymail.co.uk/i/pix/2010/05/11/article-1277561-09798D10000005DC-866_634x511.jpg" />,
    name: 'Olivia Lee',
    occupation: 'Influencer',
    testimonial:
      "As an influencer, I've had a fantastic experience working with this platform. The opportunities to collaborate with brands are abundant, and the support from the team is exceptional. Couldn't ask for a better platform!",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="https://s3.amazonaws.com/allprograms/wp-content/uploads/2023/08/09211509/fashion_blog_FSF-course-module-imageModule-4-min.png" />,
    name: 'UrbanChic Fashion',
    occupation: 'Marketer',
    testimonial:
      "The analytics provided by the platform are comprehensive and insightful. It's been instrumental in helping us track campaign performance and optimize our marketing strategies. Great tool for marketers!",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="https://findyourinfluence.com/wp-content/uploads/2018/09/Brian-Morr-e1538152266197-750x500.jpg"/>,
    name: 'Michael Brown',
    occupation: 'Influencer',
    testimonial:
      "The platform's dashboard is easy to navigate, and I appreciate the detailed campaign briefs provided by marketers. It makes it much easier to create content that aligns with brand objectives. Highly recommended for influencers!",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="https://366e203a.rocketcdn.me/wp-content/uploads/2022/12/The-Ultimate-Top-10-Most-Expensive-Perfumes-In-The-World.jpg" />,
    name: 'ElegantEssence Perfumes',
    occupation: 'Marketer',
    testimonial:
      "Impressed with the level of transparency and communication between marketers and influencers. The collaboration process has been smooth, and we've seen excellent results from our campaigns. A must-have for any marketer.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="https://images.squarespace-cdn.com/content/v1/593070a42994cad2710a6439/1522943988234-I9J5CZCYEB2NOXNQFKVF/EM.jpeg?format=1500w" />,
    name: 'Emma Taylor',
    occupation: 'Influencer',
    testimonial:
    "I've been using this platform for a while now, and it's been a game-changer for my influencer career. The payment process is prompt, and the ability to communicate directly with marketers ensures a smooth collaboration process. Love it!",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

// const darkLogos = [
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
//   'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
// ];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
//   const theme = useTheme();
  const logos =  whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="white" className='text-style' sx={{ fontSize:24, paddingBottom:'12px'}}>
          Reviews
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                backgroundColor: "#080726"
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{color:'#F4F4F4'}}>
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
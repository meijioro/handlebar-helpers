Handlebars.registerHelper('getObjFromArray', function(path, name, options) {
  //check if data is loaded
  if (path) {
    //check if is []
    if (Array.isArray(path)) {
      for (const [key, value] of Object.entries(path)) {
        if (value.name == name) {
          return options.fn(value);
        }
      }
      //if hasn't returned yet then something incorrect
      console.error('getObjectFromArray error: style name does not exist/is incorrect')
    } else {
      console.error('getObjectFromArray error: The brand style path is not array.')
    }
  }
});

// DATA
const data = {
  headline_style: 'headline_feature_italic',
  cta_style: 'cta_primary',

  "brand": {
    "name": "Marriott Bonvoy",
    "base_url": "https://www.marriott.com/default.mi",
    "email_settings": {
      "overflow_color": "#F9F6F4",
      "email_background_color": "#FFFFFF",
      "module_bgcolor": "#FFFFFF",
      "box_bgcolor": "#FFFFFF",
      "divider_bgcolor": "#d9d7d7",
      "divider_height": 1
    },
    "colors": [
      {
        "name": "Primary - White",
        "value": "#FFFFFF"
      },
      {
        "name": "Primary - Bonvoy Coral",
        "value": "#FF9662"
      },
      {
        "name": "Primary - Bonvoy Black",
        "value": "#1C1C1C"
      },
      {
        "name": "Text Color - Links",
        "value": "#B84C16"
      },
      {
        "name": "Background Color - Grey",
        "value": "#F9F6F4"
      },
      {
        "name": "Accent - Bonvoy White",
        "value": "#F9F6F4"
      },
      {
        "name": "Accent - Medium Coral",
        "value": "#FFB995"
      },
      {
        "name": "Accent - Green",
        "value": "#CFE0D2"
      },
      {
        "name": "Accent - Blue",
        "value": "#CEDCDF"
      },
      {
        "name": "Accent - Yellow",
        "value": "#FFDAA0"
      },
      {
        "name": "Status Level - Member",
        "value": "#FFFFFF"
      },
      {
        "name": "Status Level - Member - Accent",
        "value": "#FF9662"
      },
      {
        "name": "Status Level - Silver",
        "value": "#707488"
      },
      {
        "name": "Status Level - Silver - Bkrd",
        "value": "#F0F1F3"
      },
      {
        "name": "Status Level - Gold",
        "value": "#8C6F49"
      },
      {
        "name": "Status Level - Gold - Bkrd",
        "value": "#F3F0EC"
      },
      {
        "name": "Status Level - Platinum Elite",
        "value": "#5E5F61"
      },
      {
        "name": "Status Level - Platinum - Bkrd",
        "value": "#F0F1F1"
      },
      {
        "name": "Status Level - Titanium",
        "value": "#554749"
      },
      {
        "name": "Status Level - Titanium - Bkrd",
        "value": "#F2F2F1"
      },
      {
        "name": "Status Level - Ambassador",
        "value": "#231C19"
      },
      {
        "name": "Status Level - Ambassador - Bkrd",
        "value": "#F3F2F2"
      }
    ],
    "elements": {
      "headlines": [
        {
          "name": "headline_feature",
          "readable_name": "Headline - Feature",
          "font_family": "'Aldine-Light', 'Times New Roman', Times, serif",
          "class": "Aldine-Light",
          "font_size": "32",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "0",
          "mobile_size": "headline_feature"
        },
        {
          "name": "headline_feature_italic",
          "readable_name": "Headline - Feature Italic",
          "font_family": "'Aldine-Light-Italic', 'Times New Roman', Times, serif",
          "class": "Aldine-Light-Italic",
          "font_size": "32",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "italic",
          "margin-bottom": "20",
          "mobile_size": "headline_feature"
        },

        {
          "name": "headline_feature_2col",
          "readable_name": "Headline - Feature 2col",
          "font_family": "'Aldine-Light', 'Times New Roman', Times, serif",
          "class": "Aldine-Light",
          "font_size": "30",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "24",
          "mobile_size": "headline_feature"
        },
        {
          "name": "headline_feature_2col_italic",
          "readable_name": "Headline - Feature 2col Italic",
          "font_family": "'Aldine-Light-Italic', 'Times New Roman', Times, serif",
          "class": "Aldine-Light-Italic",
          "font_size": "30",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "italic",
          "margin-bottom": "24",
          "mobile_size": "headline_feature"
        },

        {
          "name": "headline_secondary",
          "readable_name": "Headline - Secondary",
          "font_family": "'Aldine-Light', 'Times New Roman', Times, serif",
          "class": "Aldine-Light",
          "font_size": "26",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "20",
          "mobile_size": "headline_feature"
        },

        {
          "name": "headline_secondary_3col",
          "readable_name": "Headline - Secondary 3col",
          "font_family": "'Aldine-Light', 'Times New Roman', Times, serif",
          "class": "Aldine-Light",
          "font_size": "20",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "10",
          "mobile_size": "headline_feature"
        },
        {
          "name": "headline_tertiary",
          "readable_name": "Headline - Tertiary",
          "font_family": "'Aldine-Light', 'Times New Roman', Times, serif",
          "class": "Aldine-Light",
          "font_size": "24",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "10",
          "mobile_size": "headline_feature"
        },
        {
          "name": "headline_instagram",
          "readable_name": "Headline - Instagram",
          "font_family": "'Aldine-Light', 'Times New Roman', Times, serif",
          "class": "Aldine-Light",
          "font_size": "24",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "10"
        },
        {
          "name": "headline_subhead",
          "readable_name": "Headline - Subhead",
          "text": "Headline Italic",
          "font_family": "'Aldine-Light-Italic', 'Times New Roman', Times, serif",
          "class": "Aldine-Light-Italic",
          "font_size": "20",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "italic"
        },
        {
          "name": "headline_eyebrow",
          "readable_name": "Headline - Eyebrow",
          "text": "Headline Italic",
          "font_family": "'Aldine-Light-Italic', 'Times New Roman', Times, serif",
          "class": "Aldine-Light-Italic",
          "font_size": "20",
          "color": "#1c1c1c",
          "line_height": "120",
          "font_weight": "400",
          "font_style": "italic",
          "margin-bottom": "14"
        }
      ],

      "paragraphs": [
        {
          "name": "para_primary",
          "readable_name": "Paragraph - Primary",
          "text": "Paragraph",
          "font_family": "'Swiss-Light', Arial, Helvetica, sans-serif",
          "class": "Swiss-Light",
          "font_size": "16",
          "color": "#1c1c1c",
          "line_height": "150",
          "font_weight": "400",
          "font_style": "normal",
          "margin-bottom": "24"
        }
      ],
      "ctas": [
        {
          "name": "cta_primary",
          "readable_name": "CTA - Primary",
          "design": "rounded",
          "icon": "none",

          "color": "#ffffff",
          "font_family": "'Swiss-Regular', Arial, Helvetica, sans-serif",
          "font_size": "16",
          "line_height": "150",
          "font_weight": "400",
          "letter_spacing": "1",
          "text_transform": "uppercase",
          "text_pad_topbottom": "8",
          "text_pad_leftright": "30",
          "text_alignment": "center",

          "bgcolor": "#1C1C1C",
          "width_type": "auto",
          "width": "280",
          "alignment": "center",

          "icon_src": "https://via.placeholder.com/20x20/999999/ffffff",
          "icon_width": "20",
          "icon_pad": "10",

          "border_color": "#ffffff",
          "border_width": "0",
          "border_radius": "100",
          "border_rounded_color": "#ffffff",
          "border_rounded_width": "0",
          "border_rounded_radius": "0",
          "box_boolean": false
        },
        {
          "name": "cta_secondary",
          "readable_name": "CTA - Secondary",
          "design": "square",
          "icon": "none",

          "color": "#1c1c1c",
          "font_family": "'Swiss-Light', Arial, sans-serif",
          "font_size": "14",
          "line_height": "120",
          "font_weight": "400",
          "text_transform": "uppercase",
          "letter_spacing": "1",
          "text_pad_topbottom": "0",
          "text_pad_leftright": "0",
          "text_alignment": "center",

          "bgcolor": "#ffffff",
          "width_type": "auto",
          "width": "280",
          "alignment": "center",

          "icon_src": "https://via.placeholder.com/20x20/999999/ffffff",
          "icon_width": "20",
          "icon_pad": "10",

          "border_color": "#ffffff",
          "border_width": "0",
          "border_radius": "100",
          "border_rounded_color": "#ffffff",
          "border_rounded_width": "0",
          "border_rounded_radius": "0",
          "box_boolean": false
        },
        {
          "name": "cta_tertiary",
          "readable_name": "CTA - Tertiary",
          "design": "square",
          "icon": "none",

          "color": "#1c1c1c",
          "font_family": "'Swiss-Light', Arial, sans-serif",
          "font_size": "12",
          "line_height": "120",
          "font_weight": "400",
          "text_transform": "uppercase",
          "letter_spacing": "1",
          "text_pad_topbottom": "0",
          "text_pad_leftright": "0",
          "text_alignment": "center",

          "bgcolor": "#ffffff",
          "width_type": "auto",
          "width": "280",
          "alignment": "center",

          "icon_src": "https://via.placeholder.com/20x20/999999/ffffff",
          "icon_width": "20",
          "icon_pad": "10",

          "border_color": "#ffffff",
          "border_width": "0",
          "border_radius": "100",
          "border_rounded_color": "#ffffff",
          "border_rounded_width": "0",
          "border_rounded_radius": "0",
          "box_boolean": false
        }
      ]
    }
  }

}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);

module.exports = {
    components: {
      categories: [
        {
          name: "General",
          include: [
            "src/ButtonMerge/ButtonMerge.js",
            "src/ButtonGroupMerge/ButtonGroupMerge.js",
            "src/ChevronButtonMerge/ChevronButtonMerge.js",
            "src/AvatarMerge/AvatarMerge.js",
            "src/LoaderMerge/LoaderMerge.js",
            "src/NotificationsMerge/NotificationsMerge.js",
            "src/WellMerge/WellMerge.js",
            "src/PaginationMerge/PaginationMerge.js"
          ]
        }
      ]
    }
  };
  
  /* 
  "src/DynamicTableMerge/DynamicTableMerge.js"
  "src/DropdownItemGroupRadioMerge/DropdownItemGroupRadioMerge.js"
  "src/DropdownItemRadioMerge/DropdownItemRadioMerge.js"
  
  uxpin-code --webpack-config ./webpack.config.js --wrapper ./src/Wrapper/UXPinWrapper.js --cwd ~/Documents/dev/zendesk/garden --dump > ./metadata.json
  */
  
  
  
define([], function(){

  return {
    type: "items",
    component: "accordion",
    items: {
      settings: {
        uses: "settings",
        items: {
          sliderSettingsHeader: {
            type: "items",
            label: "Slider Settings",
            items: {
              varlable: {
                ref: "props.variable",
                label: "Variable",
                type: "string",
                defaultValue: "Variable1"
              },
              minValue: {
                ref: "props.minValue",
                label: "Minimum Value",
                type: "string",
                defaultValue: "0"
              },
              maxValue: {
                ref: "props.maxValue",
                label: "Maximum Value",
                type: "string",
                defaultValue: "100"
              },
              step: {
                ref: "props.sliderStep",
                label: "Slider Step",
                type: "string",
                defaultValue: "1"
              },
              defaultValue: {
                ref: "props.defaultValue",
                label: "Default Value",
                type: "string",
                defaultValue: "50"
              },
              label: {
                ref: "props.label",
                label: "Reset Button Label",
                type: "string",
                defaultValue: "Reset"
              },
            }
          }
        }
      }
    }
  }
});

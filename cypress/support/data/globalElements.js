module.exports = {
  path: {
    menu: {
      elements: ".category-cards > :nth-child(1)",
      forms: ".category-cards > :nth-child(2)",
      alertsFrameWindows: ".category-cards > :nth-child(3)",
      widgets: ".category-cards > :nth-child(4)",
      interaction: ".category-cards > :nth-child(5)",
    },

    elements: {
      textBox: ":nth-child(1) > .element-list > .menu-list > #item-0 > .text",
      checkBox: ":nth-child(1) > .element-list > .menu-list > #item-1 > .text",
      radioButton:":nth-child(1) > .element-list > .menu-list > #item-2 > .text",
      webTables: ":nth-child(1) > .element-list > .menu-list > #item-3 > .text",
      buttons: ":nth-child(1) > .element-list > .menu-list > #item-4 > .text",
      links: ":nth-child(1) > .element-list > .menu-list > #item-5 > .text",
      brokenLinksImages: ":nth-child(1) > .element-list > .menu-list > #item-6 > .text",
      uploadAndDownload: ":nth-child(1) > .element-list > .menu-list > #item-7 > .text",
      dynamicProperties: ":nth-child(1) > .element-list > .menu-list > #item-8 > .text",
    },

    forms: {
      practiceForm: ":nth-child(2) > .element-list > .menu-list > #item-0 > .text",
    },

    alertsFrameWindows: {
      browserWindows: ":nth-child(3) > .element-list > .menu-list > #item-0 > .text",
      alerts: ":nth-child(3) > .element-list > .menu-list > #item-1 > .text",
      frames: ":nth-child(3) > .element-list > .menu-list > #item-2 > .text",
      nestedFrames: ":nth-child(3) > .element-list > .menu-list > #item-3 > .text",
      modalDialogs: ":nth-child(3) > .element-list > .menu-list > #item-4 > .text",
    },

    widgets: {
      accordian: ":nth-child(4) > .element-list > .menu-list > #item-0 > .text",
      autoComplete: ":nth-child(4) > .element-list > .menu-list > #item-1 > .text",
      datePicker: ":nth-child(4) > .element-list > .menu-list > #item-2 > .text",
      slider: ":nth-child(4) > .element-list > .menu-list > #item-3 > .text",
      progressBar: ":nth-child(4) > .element-list > .menu-list > #item-4 > .text",
      tabs: ":nth-child(4) > .element-list > .menu-list > #item-5 > .text",
      toolTips: ":nth-child(4) > .element-list > .menu-list > #item-6 > .text",
      menu: ":nth-child(4) > .element-list > .menu-list > #item-7 > .text",
      selectMenu: ":nth-child(4) > .element-list > .menu-list > #item-8 > .text",
    },

    interaction: {
      sortable: ":nth-child(5) > .element-list > .menu-list > #item-0 > .text",
      selectable: ":nth-child(5) > .element-list > .menu-list > #item-1 > .text",
      resizable: ":nth-child(5) > .element-list > .menu-list > #item-2 > .text",
      droppable: ":nth-child(5) > .element-list > .menu-list > #item-3 > .text",
      dragabble: ":nth-child(5) > .element-list > .menu-list > #item-4 > .text",
    },
  },
};

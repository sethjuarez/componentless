import * as go from "gojs";

export const initDiagram = () => {
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram = $(go.Diagram, {
    "undoManager.isEnabled": true,
    "clickCreatingTool.archetypeNodeData": {
      text: "new node",
      color: "lightblue",
    },
    model: new go.GraphLinksModel({
      linkKeyProperty: "key",
    }),
  });

  const iconDesc = (sz: string, color?: string): any => {
    return {
      font: `${sz} FabricMDL2Icons`,
      stroke: color || "dodgerblue",
      spacingAbove: 7,
      spacingBelow: -2,
      alignment: go.Spot.Center,
      verticalAlignment: go.Spot.Center,
      mouseEnter: function (e: go.InputEvent, obj: go.GraphObject) {
        obj.background = "#e3e3e3";
      },
      mouseLeave: function (e: go.InputEvent, obj: go.GraphObject) {
        obj.background = "transparent";
      },
    };
  };

  const inputTemplate = $(
    go.Part,
    "Vertical",
    { selectionAdorned: false },
    $(
      go.Panel,
      "Auto",
      $(go.Shape, "RoundedRectangle", {
        stroke: "dodgerblue",
        fill: "white",
        mouseEnter: function (e: go.InputEvent, obj: go.GraphObject) {
          obj.background = "#EFF6FC";
        },
        mouseLeave: function (e: go.InputEvent, obj: go.GraphObject) {
          obj.background = "#ffffff";
        },
      }),
      $(
        go.Panel,
        "Horizontal",
        $(go.TextBlock, "\uEC7D", {
          ...iconDesc("16pt"),
          alignment: go.Spot.Left,
          margin: 5,
        }),
        $(go.TextBlock, new go.Binding("text", "text").makeTwoWay(), {
          column: 2,
          columnSpan: 3,
          font: "12pt Segoe UI",
          alignment: go.Spot.Left,
          margin: 5,
        })
      )
    ),
    $(
      go.Panel,
      "Horizontal",
      { alignment: go.Spot.TopCenter },
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Rectangle", {
          fill: "#c0c0c0",
          stroke: "#606060",
          height: 10,
          width: 10,
        })
      )
    )
  );

  const transformTemplate = $(
    go.Part,
    "Vertical",
    { selectionAdorned: false },
    $(
      go.Panel,
      "Auto",
      $(go.Shape, "Circle", {
        fill: "#c0c0c0",
        stroke: "#606060",
        height: 10,
        width: 10,
      })
    ),
    $(
      go.Panel,
      "Auto",
      {},
      $(go.Shape, "RoundedRectangle", {
        fill: "white",
        stroke: "dodgerblue",
      }),
      $(
        go.Panel,
        "Table",
        {
          defaultSeparatorPadding: 3,
          mouseEnter: function (e: go.InputEvent, obj: go.GraphObject) {
            obj.background = "#EFF6FC";
          },
          mouseLeave: function (e: go.InputEvent, obj: go.GraphObject) {
            obj.background = "#ffffff";
          },
          click: function (e: go.InputEvent, obj: go.GraphObject) {
            console.log(obj);
          },
        },
        $(
          go.Panel,
          "TableRow",
          { row: 0 },
          $(go.TextBlock, new go.Binding("text", "title").makeTwoWay(), {
            column: 0,
            columnSpan: 5,
            font: "10pt Segoe UI",
            stroke: "white",
            alignment: go.Spot.Left,
          })
        ),
        $(
          go.Panel,
          "TableRow",
          { row: 1 },
          $(go.Picture, new go.Binding("source", "image").makeTwoWay(), {
            column: 0,
            width: 52,
            height: 52,
            scale: 1,
            columnSpan: 2,
            alignment: go.Spot.Center,
          }),
          $(go.TextBlock, new go.Binding("text", "text").makeTwoWay(), {
            column: 2,
            columnSpan: 3,
            font: "12pt Segoe UI",
            alignment: go.Spot.Left,
          })
        ),
        $(
          go.Panel,
          "TableRow",
          { row: 2 },
          $(go.TextBlock, "\uE74D", { ...iconDesc("16pt"), column: 0 }),
          $(go.TextBlock, "\uF03A", { ...iconDesc("16pt"), column: 1 }),
          $(go.TextBlock, "\uE8C8", { ...iconDesc("16pt"), column: 2 }),
          $(go.TextBlock, " ", { column: 3 }),
          $(go.TextBlock, "\uF2DF", { ...iconDesc("16pt"), column: 4 })
        ),
        $(go.RowColumnDefinition, { row: 0, background: "dodgerblue" }),
        $(go.RowColumnDefinition, { row: 1, height: 72 }),
        $(go.RowColumnDefinition, { row: 2, height: 42 }),
        $(go.RowColumnDefinition, { column: 0, width: 42 }),
        $(go.RowColumnDefinition, { column: 1, width: 42 }),
        $(go.RowColumnDefinition, { column: 2, width: 42 }),
        $(go.RowColumnDefinition, { column: 3, width: 42 }),
        $(go.RowColumnDefinition, { column: 4, width: 42 })
      )
    ),
    $(
      go.Panel,
      "Horizontal",
      { alignment: go.Spot.TopCenter },
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Rectangle", {
          fill: "white",
          stroke: "#606060",
          height: 16,
        }),
        $(go.TextBlock, "\uF13D", {
          ...iconDesc("14pt", "red"),
          spacingAbove: 5,
          spacingBelow: -2,
        })
      ),
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Rectangle", {
          fill: "white",
          stroke: "white",
          height: 16,
          width: 32,
        })
      ),
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Rectangle", {
          fill: "white",
          stroke: "#606060",
          height: 16,
          shadowVisible: true,
        }),
        $(go.TextBlock, "\uF13E", {
          ...iconDesc("14pt", "green"),
          spacingAbove: 5,
          spacingBelow: -2,
        })
      )
    )
  );

  diagram.nodeTemplate = $(
    go.Part,
    "Auto",
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Shape,
      "RoundedRectangle",
      { name: "SHAPE", fill: "white", strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding("fill", "color")
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: true },
      new go.Binding("text").makeTwoWay()
    )
  );

  const templmap = new go.Map<string, go.Part>();
  templmap.add("transform", transformTemplate);
  templmap.add("input", inputTemplate);
  templmap.add("", diagram.nodeTemplate);
  diagram.nodeTemplateMap = templmap;

  return diagram;
};

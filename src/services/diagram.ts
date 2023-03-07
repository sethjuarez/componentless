import * as go from "gojs";
const $ = go.GraphObject.make;

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
  go.Node,
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
        margin: 10,
      }),
      $(go.TextBlock, new go.Binding("text", "text").makeTwoWay(), {
        column: 2,
        columnSpan: 3,
        font: "12pt Segoe UI",
        alignment: go.Spot.Left,
        margin: 10,
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
        portId: "io",
        fromSpot: go.Spot.BottomCenter,
        fromLinkable: true,
        cursor: "pointer",
      })
    )
  )
);

const outputTemplate = $(
  go.Node,
  "Vertical",
  { selectionAdorned: false },
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
        portId: "out",
        toSpot: go.Spot.TopCenter,
        toLinkable: true,
        cursor: "pointer",
      })
    )
  ),
  $(
    go.Panel,
    "Auto",
    $(go.Shape, "RoundedRectangle", {
      stroke: "green",
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
      $(go.TextBlock, "\uEC61", {
        ...iconDesc("16pt"),
        stroke: "green",
        alignment: go.Spot.Left,
        margin: 10,
      }),
      $(go.TextBlock, new go.Binding("text", "text").makeTwoWay(), {
        column: 2,
        columnSpan: 3,
        stroke: "green",
        font: "12pt Segoe UI",
        alignment: go.Spot.Left,
        margin: 10,
      })
    )
  )
);

const transformTemplate = $(
  go.Node,
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
      portId: "tin",
      toSpot: go.Spot.TopCenter,
      toLinkable: true,
      cursor: "pointer",
    })
  ),
  $(
    go.Panel,
    "Auto",
    {},
    $(
      go.Shape,
      "RoundedRectangle",
      {
        fill: "white",
        stroke: "dodgerblue",
      },
      new go.Binding("stroke", "color", (c) => c || "dodgerblue")
    ),
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
        $(
          go.TextBlock,
          "\uE74D",
          { ...iconDesc("16pt"), column: 0 },
          new go.Binding("stroke", "color", (c) => c || "dodgerblue")
        ),
        $(
          go.TextBlock,
          "\uF03A",
          { ...iconDesc("16pt"), column: 1 },
          new go.Binding("stroke", "color", (c) => c || "dodgerblue")
        ),
        $(
          go.TextBlock,
          "\uE8C8",
          { ...iconDesc("16pt"), column: 2 },
          new go.Binding("stroke", "color", (c) => c || "dodgerblue")
        ),
        $(go.TextBlock, " ", { column: 3 }),
        $(
          go.TextBlock,
          "\uF2DF",
          { ...iconDesc("16pt"), column: 4 },
          new go.Binding("stroke", "color", (c) => c || "dodgerblue")
        )
      ),
      $(
        go.RowColumnDefinition,
        { row: 0, background: "dodgerblue" },
        new go.Binding("background", "color", (c) => c || "dodgerblue")
      ),
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
        portId: "terrout",
        fromLinkable: true,
        fromSpot: go.Spot.BottomCenter,
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
        portId: "tsucout",
        fromLinkable: true,
        fromSpot: go.Spot.BottomCenter,
      }),
      $(go.TextBlock, "\uF13E", {
        ...iconDesc("14pt", "green"),
        spacingAbove: 5,
        spacingBelow: -2,
      })
    )
  )
);

export const initDiagram = () => {
  const diagram = $(go.Diagram, {
    "undoManager.isEnabled": true,
    model: new go.GraphLinksModel({
      linkKeyProperty: "key",
      linkFromKeyProperty: "from",
      linkFromPortIdProperty: "fromPort",
      linkToKeyProperty: "to",
      linkToPortIdProperty: "toPort",
    }),
    layout: $(go.LayeredDigraphLayout, {
      alignOption: go.LayeredDigraphLayout.AlignAll,
      direction: 90,
      //initializeOption: go.LayeredDigraphLayout.InitDepthFirstIn,
      layerSpacing: 50,
      columnSpacing: 100,
    }),
  });

  diagram.nodeTemplate = $(
    go.Node,
    "Auto", // the Shape will go around the TextBlock
    $(
      go.Shape,
      "RoundedRectangle",
      { name: "SHAPE", fill: "white", strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding("fill", "color")
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: true }, // some room around the text
      new go.Binding("text").makeTwoWay()
    )
  );

  diagram.linkTemplate = $(
    go.Link,
    { curve: go.Link.Bezier },
    $(go.Shape, { strokeWidth: 1, stroke: "#c0c0c0" }),
    $(go.Shape, { toArrow: "Standard", stroke: "#c0c0c0" })
  );

  const templmap = new go.Map<string, go.Part>();
  templmap.add("transform", transformTemplate);
  templmap.add("input", inputTemplate);
  templmap.add("output", outputTemplate);
  templmap.add("", diagram.nodeTemplate);

  diagram.nodeTemplateMap = templmap;

  return diagram;
};

export const initOverview = (): go.Overview => {
  const $ = go.GraphObject.make;
  const overview = $(go.Overview, {
    contentAlignment: go.Spot.Center,
    "box.resizable": true,
  });
  return overview;
};

export const initPalette = (): go.Palette => {
  const $ = go.GraphObject.make;
  const palette = $(go.Palette);
  const templmap = new go.Map<string, go.Part>();
  const paletteInputTemplate = $(
    go.Node,
    "Vertical",
    { selectionAdorned: false },
    $(
      go.Panel,
      "Auto",
      $(go.Shape, "RoundedRectangle", {
        stroke: "dodgerblue",
        fill: "white",
        width: 200,
      }),
      $(
        go.Panel,
        "Spot",
        {
          width: 200,
        },
        $(go.TextBlock, "\uEC7D", {
          ...iconDesc("16pt"),
          alignment: new go.Spot(0, 0.5),
          margin: 5,
        }),
        $(go.TextBlock, new go.Binding("text", "text").makeTwoWay(), {
          font: "12pt Segoe UI",
          alignment: new go.Spot(0, 0.5, 90, 0),
          margin: 5,
          width: 130,
          textAlign: "left",
        }),
        $(go.TextBlock, "\uEF66", {
          ...iconDesc("16pt"),
          alignment: new go.Spot(1, 0.5, -16, 0),
          margin: 5,
        })
      )
    )
  );
  const paletteOutputTemplate = $(
    go.Node,
    "Vertical",
    { selectionAdorned: false },
    $(
      go.Panel,
      "Auto",
      $(go.Shape, "RoundedRectangle", {
        stroke: "green",
        fill: "white",
        width: 200,
      }),
      $(
        go.Panel,
        "Spot",
        {
          width: 200,
        },
        $(go.TextBlock, "\uEF7D", {
          ...iconDesc("16pt"),
          stroke: "green",
          alignment: new go.Spot(0, 0.5),
          margin: 5,
        }),
        $(go.TextBlock, new go.Binding("text", "text"), {
          font: "12pt Segoe UI",
          alignment: new go.Spot(0, 0.5, 90, 0),
          margin: 5,
          width: 130,
          textAlign: "left",
          stroke: "green",
        }),
        $(go.TextBlock, "\uEF66", {
          ...iconDesc("16pt"),
          stroke: "green",
          alignment: new go.Spot(1, 0.5, -16, 0),
          margin: 5,
        })
      )
    )
  );

  const paletteTransformTemplate = $(
    go.Node,
    "Vertical",
    { selectionAdorned: false },
    $(
      go.Panel,
      "Auto",
      $(
        go.Shape,
        "RoundedRectangle",
        {
          stroke: "dodgerblue",
          fill: "white",
          width: 200,
        },
        new go.Binding("stroke", "color", (c) => c || "dodgerblue")
      ),
      $(
        go.Panel,
        "Spot",
        {
          width: 200,
        },
        $(
          go.Panel,
          "Auto",
          {},
          $(
            go.Picture,
            {
              width: 24,
              height: 24,
              margin: 5,
              alignment: new go.Spot(0, 0.5),
              scale: 1,
            },
            new go.Binding("source", "image")
          )
        ),
        $(go.TextBlock, new go.Binding("text", "title").makeTwoWay(), {
          font: "10pt Segoe UI",
          alignment: new go.Spot(0, 0.5, 100, 0),
          margin: 5,
          width: 130,
          textAlign: "left",
        }),
        $(
          go.TextBlock,
          "\uEF66",
          {
            ...iconDesc("16pt"),
            alignment: new go.Spot(1, 0.5, -16, 0),
            margin: 5,
          },
          new go.Binding("stroke", "color", (c) => c || "dodgerblue")
        )
      )
    )
  );
  templmap.add("input", paletteInputTemplate);
  templmap.add("transform", paletteTransformTemplate);
  templmap.add("output", paletteOutputTemplate);
  palette.nodeTemplateMap = templmap;

  return palette;
};

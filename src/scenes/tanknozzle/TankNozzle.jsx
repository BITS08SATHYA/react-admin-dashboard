import React, { useEffect, useRef } from "react";
import { dia, shapes } from "jointjs";
import 'jointjs/dist/joint.css';

export default function TankPumpDiagram() {
    const graphRef = useRef(null);
    const paperRef = useRef(null);

    useEffect(() => {
        const graph = new dia.Graph();
        graphRef.current = graph;

        const paper = new dia.Paper({
            el: paperRef.current,
            model: graph,
            width: 600,
            height: 400,
            gridSize: 10,
            drawGrid: true
        });

        // Tank
        const tank = new shapes.standard.Rectangle();
        tank.position(50, 150);
        tank.resize(100, 80);
        tank.attr({
            body: { fill: '#4DB6AC' },
            label: { text: 'Tank', fill: 'white' }
        });
        tank.addTo(graph);

        // Pump
        const pump = new shapes.standard.Circle();
        pump.position(250, 160);
        pump.resize(60, 60);
        pump.attr({
            body: { fill: '#FF7043' },
            label: { text: 'Pump', fill: 'white' }
        });
        pump.addTo(graph);

        // Nozzle
        const nozzle = new shapes.standard.Rectangle();
        nozzle.position(450, 170);
        nozzle.resize(80, 40);
        nozzle.attr({
            body: { fill: '#42A5F5' },
            label: { text: 'Nozzle', fill: 'white' }
        });
        nozzle.addTo(graph);

        // Connect Tank -> Pump
        const link1 = new shapes.standard.Link();
        link1.source(tank);
        link1.target(pump);
        link1.attr('line/stroke', '#fff');
        link1.addTo(graph);

        // Connect Pump -> Nozzle
        const link2 = new shapes.standard.Link();
        link2.source(pump);
        link2.target(nozzle);
        link2.attr('line/stroke', '#fff');
        link2.addTo(graph);

    }, []);

    return <div ref={paperRef} style={{ border: "1px solid #333" }} />;
}
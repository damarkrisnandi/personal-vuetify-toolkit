<template>
    <div>
        <!-- Line Chart -->
        <CodeShowcase title="Line Chart" description="Interactive line chart for displaying trends and time-series data"
            icon="mdi-chart-line" difficulty="Medium" :code="lineChartCode">
            <template #preview>
                <v-card>
                    <v-card-title>Sales Trend</v-card-title>
                    <v-card-text>
                        <div
                            style="height: 200px; background: linear-gradient(45deg, #e3f2fd, #bbdefb); border-radius: 4px; position: relative;">
                            <svg style="width: 100%; height: 100%; position: absolute;">
                                <polyline points="20,160 60,140 100,100 140,90 180,120 220,60" stroke="#1976d2"
                                    stroke-width="3" fill="none" />
                                <circle cx="20" cy="160" r="4" fill="#1976d2" />
                                <circle cx="60" cy="140" r="4" fill="#1976d2" />
                                <circle cx="100" cy="100" r="4" fill="#1976d2" />
                                <circle cx="140" cy="90" r="4" fill="#1976d2" />
                                <circle cx="180" cy="120" r="4" fill="#1976d2" />
                                <circle cx="220" cy="60" r="4" fill="#1976d2" />
                            </svg>
                            <div style="position: absolute; bottom: 8px; left: 8px; font-size: 12px; color: #666;">
                                Jan-Jun Sales Data</div>
                        </div>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Bar Chart -->
        <CodeShowcase title="Bar Chart" description="Vertical bar chart for comparing values across categories"
            icon="mdi-chart-bar" difficulty="Medium" :code="barChartCode">
            <template #preview>
                <v-card>
                    <v-card-title>Product Sales</v-card-title>
                    <v-card-text>
                        <div
                            style="height: 200px; background: #fafafa; border-radius: 4px; padding: 16px; position: relative;">
                            <div style="display: flex; align-items: end; height: 150px; gap: 12px;">
                                <div style="width: 30px; height: 60%; background: #ff5722; border-radius: 2px 2px 0 0;">
                                </div>
                                <div style="width: 30px; height: 95%; background: #2196f3; border-radius: 2px 2px 0 0;">
                                </div>
                                <div style="width: 30px; height: 15%; background: #4caf50; border-radius: 2px 2px 0 0;">
                                </div>
                                <div style="width: 30px; height: 25%; background: #ff9800; border-radius: 2px 2px 0 0;">
                                </div>
                                <div style="width: 30px; height: 10%; background: #9c27b0; border-radius: 2px 2px 0 0;">
                                </div>
                            </div>
                            <div style="position: absolute; bottom: 8px; left: 8px; font-size: 12px; color: #666;">
                                Product A-E Sales</div>
                        </div>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Pie Chart -->
        <CodeShowcase title="Pie Chart" description="Circular chart showing proportional data segments"
            icon="mdi-chart-pie" difficulty="Medium" :code="pieChartCode">
            <template #preview>
                <v-card>
                    <v-card-title>Market Share</v-card-title>
                    <v-card-text>
                        <div
                            style="height: 200px; background: #fafafa; border-radius: 4px; padding: 16px; display: flex; align-items: center; justify-content: center;">
                            <div
                                style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(#ff6384 0deg 144deg, #36a2eb 144deg 234deg, #ffce56 234deg 306deg, #4bc0c0 306deg 360deg); position: relative;">
                                <div
                                    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 12px; font-weight: bold; color: white; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                                    Market Share</div>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Doughnut Chart -->
        <CodeShowcase title="Doughnut Chart"
            description="Pie chart with a hollow center for displaying hierarchical data" icon="mdi-chart-donut"
            difficulty="Medium" :code="doughnutChartCode">
            <template #preview>
                <v-card>
                    <v-card-title>Revenue Breakdown</v-card-title>
                    <v-card-text>
                        <div
                            style="height: 200px; background: #fafafa; border-radius: 4px; padding: 16px; display: flex; align-items: center; justify-content: center;">
                            <div
                                style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(#ff9f40 0deg 162deg, #ff6384 162deg 270deg, #36a2eb 270deg 324deg, #4bc0c0 324deg 360deg); position: relative;">
                                <div
                                    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; color: #666;">
                                    Revenue</div>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Area Chart -->
        <CodeShowcase title="Area Chart"
            description="Filled line chart for showing volume and cumulative data over time" icon="mdi-chart-areaspline"
            difficulty="Medium" :code="areaChartCode">
            <template #preview>
                <v-card>
                    <v-card-title>Website Traffic</v-card-title>
                    <v-card-text>
                        <div
                            style="height: 200px; background: linear-gradient(45deg, #f3f9ff, #e1f2ff); border-radius: 4px; position: relative; overflow: hidden;">
                            <svg style="width: 100%; height: 100%; position: absolute;">
                                <defs>
                                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:rgba(54, 162, 235, 0.3);stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:rgba(54, 162, 235, 0.1);stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                <polygon points="20,180 60,150 100,120 140,80 180,140 220,100 260,110 260,180"
                                    fill="url(#areaGradient)" stroke="rgba(54, 162, 235, 1)" stroke-width="2" />
                            </svg>
                            <div style="position: absolute; bottom: 8px; left: 8px; font-size: 12px; color: #666;">
                                Mon-Sun Traffic</div>
                        </div>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>

        <!-- Radar Chart -->
        <CodeShowcase title="Radar Chart"
            description="Multi-axis chart for displaying performance metrics across multiple variables" icon="mdi-radar"
            difficulty="Hard" :code="radarChartCode">
            <template #preview>
                <v-card>
                    <v-card-title>Performance Metrics</v-card-title>
                    <v-card-text>
                        <div
                            style="height: 200px; background: #fafafa; border-radius: 4px; padding: 16px; display: flex; align-items: center; justify-content: center;">
                            <div style="width: 120px; height: 120px; position: relative;">
                                <svg style="width: 100%; height: 100%;">
                                    <polygon points="60,10 100,35 85,80 35,80 20,35" stroke="rgba(255, 99, 132, 1)"
                                        stroke-width="2" fill="rgba(255, 99, 132, 0.2)" />
                                    <polygon points="60,20 90,40 75,70 45,70 30,40" stroke="rgba(54, 162, 235, 1)"
                                        stroke-width="2" fill="rgba(54, 162, 235, 0.2)" />
                                    <circle cx="60" cy="60" r="2" fill="#666" />
                                    <text x="62" y="15" font-size="8" fill="#666">Speed</text>
                                    <text x="85" y="85" font-size="8" fill="#666">Safety</text>
                                </svg>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </template>
        </CodeShowcase>
    </div>
</template>

<script setup>
import CodeShowcase from '../CodeShowcase.vue';

// Complete line chart code with script implementation
import { areaChartCode, barChartCode, doughnutChartCode, lineChartCode, pieChartCode, radarChartCode } from '@/constants/chartComponents';
</script>

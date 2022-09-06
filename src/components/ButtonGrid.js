import React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function RootButtonGrid({ children, color }) {
    return (
        <div class="pagination-nav buttonGridTopMargin">
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link pagination-nav__item--next" href="https://sonr.fyi">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/1-roadmap.png" />
                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">What we have planned</div>
                                <div class="pagination-nav__label">Roadmap</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/basics/components">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>

                                <img src="/3d/1-components.png" />

                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">The Anatomy of our Architecture</div>
                                <div class="pagination-nav__label">Components</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/basics/features">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/1-features.png" />
                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">Everything Sonr can do!</div>
                                <div class="pagination-nav__label">Features</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/guides/install">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/1-advanced.png" />

                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">In-Depth Technical Docs</div>
                                <div class="pagination-nav__label">Advanced</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
        </div>
    );
}


function GetStartedButtonGrid({ children, color }) {
    return (
        <div class="pagination-nav buttonGridTopMargin">
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link pagination-nav__item--next" href="/docs/guides/overview">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/2-overview.png" />
                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">Structure of a Sonr App</div>
                                <div class="pagination-nav__label">Overview</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/guides/install">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>

                                <img src="/3d/2-install.png" />

                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">Get our CLI and SDKs</div>
                                <div class="pagination-nav__label">Installation</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/blog">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/2-tutorials.png" />
                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">Guides for building on Sonr</div>
                                <div class="pagination-nav__label">Tutorials</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/reference/speedway/cli">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/2-reference.png" />

                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">API Explorer and Types</div>
                                <div class="pagination-nav__label">Reference</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
        </div>
    );
}

export {
    GetStartedButtonGrid,
    RootButtonGrid,
};

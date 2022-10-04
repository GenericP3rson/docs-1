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
                <a class="pagination-nav__link" href="/docs/intro/concepts">
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
                                <div class="pagination-nav__sublabel">The things you need to know </div>
                                <div class="pagination-nav__label">Concepts</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="docs/intro/modules/registry">
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
                                <div class="pagination-nav__label">Modules</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="https://github.com/sonr-io/sonr/tree/dev/docs/architecture">
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
                <a class="pagination-nav__link pagination-nav__item--next" href="/docs/guides/install">
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
                <a class="pagination-nav__link" href="https://github.com/sonr-io">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/3d/2-github.png" />
                            </Grid>
                            <Grid item>
                                {" "}
                                <div class="pagination-nav__sublabel">Visit our Github Org</div>
                                <div class="pagination-nav__label">Github</div>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/tools/speedway/cli">
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

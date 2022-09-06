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
                                <img src="/img/roadmap.png" />
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

                                <img src="/img/components.png" />

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
                                <img src="/img/features.png" />
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
                                <img src="/img/advanced.png" />

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
                <a class="pagination-nav__link pagination-nav__item--next" href="">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <img src="/img/icons/icon-72x72.png" />
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

                                <img src="/img/icons/icon-72x72.png" />

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
                                <img src="/img/icons/icon-72x72.png" />
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
                                <img src="/img/icons/icon-72x72.png" />

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

export {
    GetStartedButtonGrid,
    RootButtonGrid,
};

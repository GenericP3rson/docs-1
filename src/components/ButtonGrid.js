import React from 'react';

export default function ButtonGrid({ children, color }) {
    return (
        <div class="pagination-nav">
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link pagination-nav__item--next" href="#url">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <Item>
                                    <img src="/img/icons/icon-72x72.png" />
                                </Item>
                            </Grid>
                            <Grid item>
                                <Item>
                                    {" "}
                                    <div class="pagination-nav__sublabel">Next</div>
                                    <div class="pagination-nav__label">Getting Started</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="#url">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <Item>
                                    <img src="/img/icons/icon-72x72.png" />
                                </Item>
                            </Grid>
                            <Grid item>
                                <Item>
                                    {" "}
                                    <div class="pagination-nav__sublabel">Next</div>
                                    <div class="pagination-nav__label">Getting Started</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="#url">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <Item>
                                    <img src="/img/icons/icon-72x72.png" />
                                </Item>
                            </Grid>
                            <Grid item>
                                <Item>
                                    {" "}
                                    <div class="pagination-nav__sublabel">Next</div>
                                    <div class="pagination-nav__label">Getting Started</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
            <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="#url">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2} md={2}>
                                <Item>
                                    <img src="/img/icons/icon-72x72.png" />
                                </Item>
                            </Grid>
                            <Grid item>
                                <Item>
                                    {" "}
                                    <div class="pagination-nav__sublabel">Next</div>
                                    <div class="pagination-nav__label">Getting Started</div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </a>
            </div>
        </div>
    );
}

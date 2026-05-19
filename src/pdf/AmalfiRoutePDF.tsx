import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { Route, Day, POI, Anchoring } from '../schemas/route';

// ── Palette (mirrors global.css) ────────────────────────────
const C = {
  seaDeep:   '#0a4a6e',
  sea:       '#1a6fa0',
  seaPale:   '#e8f5fc',
  anchor:    '#c9a84c',
  anchorDk:  '#9e7b2a',
  land:      '#f5e6c8',
  muted:     '#6b7280',
  border:    '#e5e7eb',
  white:     '#ffffff',
  text:      '#1a1a2e',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    color: C.text,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 25,
  },
  // Cover
  coverPage: {
    backgroundColor: C.seaPale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTitle: {
    fontFamily: 'Playfair',
    fontSize: 28,
    fontWeight: 700,
    color: C.seaDeep,
    textAlign: 'center',
    marginBottom: 10,
  },
  coverSubtitle: {
    fontSize: 11,
    color: C.muted,
    textAlign: 'center',
    maxWidth: 320,
  },
  coverMeta: {
    fontSize: 9,
    color: C.muted,
    marginTop: 8,
  },
  // Day header
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `2px solid ${C.sea}`,
    paddingBottom: 6,
    marginBottom: 8,
  },
  dayBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: C.sea,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  dayBadgeText: {
    color: C.white,
    fontSize: 8,
    fontWeight: 700,
  },
  dayTitle: {
    fontFamily: 'Playfair',
    fontSize: 16,
    fontWeight: 700,
    color: C.seaDeep,
  },
  dayMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 6,
  },
  dayMetaItem: {
    fontSize: 8,
    color: C.muted,
  },
  dayMetaValue: {
    color: C.text,
    fontWeight: 600,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  // Section label
  sectionLabel: {
    fontSize: 7,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: C.sea,
    marginBottom: 4,
  },
  // Destinations
  destRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 8,
  },
  destItem: {
    fontSize: 8,
    marginRight: 8,
  },
  destCoord: {
    fontFamily: 'Courier',
    fontSize: 7,
    color: C.muted,
  },
  // POI grid
  poiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 8,
  },
  poiCard: {
    width: '48%',
    border: `1px solid ${C.border}`,
    borderRadius: 4,
    padding: 5,
    backgroundColor: C.white,
  },
  poiName: {
    fontSize: 8,
    fontWeight: 600,
    marginBottom: 2,
  },
  poiDesc: {
    fontSize: 7.5,
    color: C.muted,
    lineHeight: 1.4,
  },
  poiRating: {
    fontSize: 7,
    color: C.anchorDk,
    marginTop: 2,
  },
  // Anchoring
  anchorBox: {
    backgroundColor: C.land,
    borderLeft: `4px solid ${C.anchor}`,
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
  },
  anchorTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: C.anchorDk,
    marginBottom: 5,
  },
  anchorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },
  anchorField: {
    minWidth: 80,
  },
  anchorLabel: {
    fontSize: 6.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: C.muted,
    marginBottom: 1,
  },
  anchorValue: {
    fontSize: 8,
    fontFamily: 'Courier',
  },
  anchorNotes: {
    fontSize: 8,
    color: C.text,
    lineHeight: 1.4,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTop: `1px solid ${C.border}`,
    paddingTop: 4,
  },
  footerText: {
    fontSize: 7,
    color: C.muted,
  },
});

// ── Sub-components ───────────────────────────────────────────

function POICard({ poi }: { poi: POI }) {
  return (
    <View style={styles.poiCard} wrap={false}>
      <Text style={styles.poiName}>{poi.name}</Text>
      <Text style={styles.poiDesc}>{poi.description}</Text>
      {poi.rating !== undefined && (
        <Text style={styles.poiRating}>
          {'★'.repeat(Math.round(poi.rating))} {poi.rating}
        </Text>
      )}
    </View>
  );
}

function AnchoringBlock({ anchoring }: { anchoring: Anchoring }) {
  return (
    <View style={styles.anchorBox} wrap={false}>
      <Text style={styles.anchorTitle}>⚓ Anchoring — {anchoring.bay}</Text>
      <View style={styles.anchorGrid}>
        <View style={styles.anchorField}>
          <Text style={styles.anchorLabel}>Coordinates</Text>
          <Text style={styles.anchorValue}>{anchoring.coordinates}</Text>
        </View>
        <View style={styles.anchorField}>
          <Text style={styles.anchorLabel}>Depth</Text>
          <Text style={styles.anchorValue}>{anchoring.depth_m} m</Text>
        </View>
        {anchoring.shelter && (
          <View style={[styles.anchorField, { minWidth: 160 }]}>
            <Text style={styles.anchorLabel}>Shelter</Text>
            <Text style={styles.anchorValue}>{anchoring.shelter}</Text>
          </View>
        )}
      </View>
      {anchoring.notes && (
        <Text style={styles.anchorNotes}>{anchoring.notes}</Text>
      )}
    </View>
  );
}

function DayPage({ day, routeTitle }: { day: Day; routeTitle: string }) {
  return (
    <Page size="A4" style={styles.page} break>
      {/* Day header */}
      <View style={styles.dayHeader}>
        <View style={styles.dayBadge}>
          <Text style={styles.dayBadgeText}>{day.day}</Text>
        </View>
        <Text style={styles.dayTitle}>{day.title}</Text>
      </View>

      {/* Meta row */}
      {(day.from ?? day.to ?? day.distance_nm) && (
        <View style={styles.dayMeta}>
          {day.from && (
            <Text style={styles.dayMetaItem}>
              From: <Text style={styles.dayMetaValue}>{day.from}</Text>
            </Text>
          )}
          {day.to && (
            <Text style={styles.dayMetaItem}>
              To: <Text style={styles.dayMetaValue}>{day.to}</Text>
            </Text>
          )}
          {day.distance_nm && (
            <Text style={styles.dayMetaItem}>
              ≈ <Text style={styles.dayMetaValue}>{day.distance_nm} nm</Text>
            </Text>
          )}
        </View>
      )}

      {/* Description */}
      {day.description && (
        <Text style={styles.description}>{day.description}</Text>
      )}

      {/* Destinations */}
      {day.destinations.length > 0 && (
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.sectionLabel}>Destinations</Text>
          {day.destinations.map((dest, i) => (
            <View key={i} style={{ flexDirection: 'row', marginBottom: 2 }}>
              <Text style={[styles.destItem, { fontWeight: 600 }]}>{dest.name}</Text>
              {dest.coordinates && (
                <Text style={styles.destCoord}> {dest.coordinates}</Text>
              )}
              {dest.description && (
                <Text style={[styles.destItem, { color: C.muted }]}> — {dest.description}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* POIs */}
      {day.pois.length > 0 && (
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.sectionLabel}>Points of Interest</Text>
          <View style={styles.poiGrid}>
            {day.pois.map((poi, i) => <POICard key={i} poi={poi} />)}
          </View>
        </View>
      )}

      {/* Anchoring */}
      {day.anchoring && <AnchoringBlock anchoring={day.anchoring} />}

      {/* Footer */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{routeTitle}</Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) =>
          `Day ${day.day}  ·  ${pageNumber} / ${totalPages}`
        } />
      </View>
    </Page>
  );
}

// ── Root document ────────────────────────────────────────────

export function AmalfiRoutePDF({ route }: { route: Route }) {
  const totalNm = route.days.reduce((acc, d) => acc + (d.distance_nm ?? 0), 0);

  return (
    <Document title={route.title} author="Amalfi Route Guide" language="en">
      {/* Cover page */}
      <Page size="A4" style={[styles.page, styles.coverPage]}>
        <Text style={styles.coverTitle}>{route.title}</Text>
        {route.description && (
          <Text style={styles.coverSubtitle}>{route.description}</Text>
        )}
        <Text style={styles.coverMeta}>
          {route.days.length} days · {totalNm} nm total
        </Text>
      </Page>

      {/* One page per day */}
      {route.days.map((day) => (
        <DayPage key={day.day} day={day} routeTitle={route.title} />
      ))}
    </Document>
  );
}
